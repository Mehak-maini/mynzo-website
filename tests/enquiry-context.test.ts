import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildEnquiryEmail, enquiryContextFromSearch, isAcceptedEnquiry,
  normaliseEnquiryContext, validateEnquiry, type EnquiryContext,
} from '../src/lib/enquiry-context';
import { trackLead } from '../src/lib/analytics';
import { POST } from '../src/app/api/contact/route';

const validEnquiry = {
  first_name: 'Test', last_name: 'Visitor', email: 'visitor@example.com',
  company: 'Example organisation', role: 'Project Developer', message: '',
};

test('page-to-form context accepts only known interests and entry pages', () => {
  for (const value of ['biodiversity-monitoring', 'forest-monitoring', 'digital-mrv', 'restoration-monitoring']) {
    assert.deepEqual(enquiryContextFromSearch(`?interest=${value}&source=${value}`), {
      project_focus: value, enquiry_source: value,
    });
  }
  assert.deepEqual(enquiryContextFromSearch('?source=biodiversity-guide'), { enquiry_source: 'biodiversity-guide' });
  assert.deepEqual(enquiryContextFromSearch('?source=project-developers'), { enquiry_source: 'project-developers' });
  assert.deepEqual(enquiryContextFromSearch('?interest=visitor@example.com&source=https://example.com/private'), {});
  assert.deepEqual(enquiryContextFromSearch('?interest=other&source=constructor'), {});
  assert.deepEqual(enquiryContextFromSearch(''), {});
  assert.deepEqual(normaliseEnquiryContext({ project_focus: 'other' }), { project_focus: 'other' });
});

test('enquiry validation keeps focus optional and rejects malformed or oversized fields', () => {
  assert.deepEqual(validateEnquiry(validEnquiry), validEnquiry);
  assert.equal(validateEnquiry({ ...validEnquiry, email: "o'connor@example.com" })?.email, "o'connor@example.com");
  assert.equal(validateEnquiry({ ...validEnquiry, first_name: '   ' }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, email: 'visitor@example.com\r\nBcc: another@example.com' }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, company: 'x'.repeat(201) }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, message: 'x'.repeat(5001) }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, role: {} }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, project_focus: 'unrecognised' }), null);
  assert.equal(validateEnquiry({ ...validEnquiry, enquiry_source: 'visitor@example.com' }), null);
  assert.equal(validateEnquiry(null), null);
  assert.equal(validateEnquiry([]), null);
});

test('email content escapes visitor text and retains readable project context in both formats', () => {
  const enquiry = validateEnquiry({
    ...validEnquiry, first_name: '<img src=x>', last_name: "O'Connor",
    company: 'Forest & "Field"', role: '<b>Researcher</b>', message: '<script>alert(1)</script>\nA > B',
    project_focus: 'biodiversity-monitoring', enquiry_source: 'biodiversity-guide',
  });
  assert.ok(enquiry);
  const email = buildEnquiryEmail(enquiry);
  assert.doesNotMatch(email.html, /<script>|<img|<b>/);
  assert.match(email.html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/);
  assert.match(email.html, /Forest &amp; &quot;Field&quot;/);
  assert.match(email.html, /O&#39;Connor/);
  assert.match(email.html, /A &gt; B/);
  for (const content of [email.html, email.text]) {
    assert.match(content, /Biodiversity monitoring/);
    assert.match(content, /Biodiversity monitoring guide/);
  }
});

test('only an explicitly accepted successful response qualifies as a lead', () => {
  assert.equal(isAcceptedEnquiry(true, { ok: true }), true);
  for (const [httpOk, body] of [
    [false, { ok: true }], [false, { ok: false }], [true, { ok: false }],
    [true, { ok: 'true' }], [true, null], [true, 'ok'],
  ] as const) assert.equal(isAcceptedEnquiry(httpOk, body), false);
});

test('lead events contain only allowlisted context and never break an accepted enquiry', t => {
  const prior = Object.getOwnPropertyDescriptor(globalThis, 'window');
  t.after(() => {
    if (prior) Object.defineProperty(globalThis, 'window', prior);
    else Reflect.deleteProperty(globalThis, 'window');
  });
  const browser = { location: { hostname: 'www.mynzocarbon.com' }, dataLayer: [] as unknown[] };
  Object.defineProperty(globalThis, 'window', { configurable: true, value: browser });
  trackLead({ project_focus: 'forest-monitoring', enquiry_source: 'project-developers', email: 'visitor@example.com' } as EnquiryContext);
  assert.deepEqual(Array.from(browser.dataLayer[0] as ArrayLike<unknown>), ['event', 'generate_lead', {
    form_id: 'get_started', method: 'website_form',
    project_focus: 'forest-monitoring', enquiry_source: 'project-developers',
  }]);
  trackLead({ project_focus: 'visitor@example.com', enquiry_source: '/private?email=visitor@example.com' } as unknown as EnquiryContext);
  assert.deepEqual(Array.from(browser.dataLayer[1] as ArrayLike<unknown>), ['event', 'generate_lead', {
    form_id: 'get_started', method: 'website_form',
  }]);
  Object.defineProperty(browser, 'dataLayer', { get() { throw new Error('Analytics unavailable'); } });
  assert.doesNotThrow(() => trackLead({ project_focus: 'biodiversity-monitoring' }));
});

test('invalid enquiries return a client error before any email transport call', async t => {
  const transport = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected transport call'); });
  for (const body of ['invalid json', JSON.stringify({ ...validEnquiry, email: 'invalid' })]) {
    const response = await POST(new Request('http://localhost/api/contact', { method: 'POST', body }));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).ok, false);
  }
  assert.equal(transport.mock.callCount(), 0);
});

test('accepted email uses the existing recipient and includes focus without changing transport failures', async t => {
  const previousAccessKey = process.env.AWS_ACCESS_KEY_ID;
  const previousSecretKey = process.env.AWS_SECRET_ACCESS_KEY;
  t.after(() => {
    if (previousAccessKey === undefined) delete process.env.AWS_ACCESS_KEY_ID;
    else process.env.AWS_ACCESS_KEY_ID = previousAccessKey;
    if (previousSecretKey === undefined) delete process.env.AWS_SECRET_ACCESS_KEY;
    else process.env.AWS_SECRET_ACCESS_KEY = previousSecretKey;
  });
  // The transport is mocked. These values never authenticate a real request.
  process.env.AWS_ACCESS_KEY_ID = 'test-access-key';
  process.env.AWS_SECRET_ACCESS_KEY = 'test-secret-key';
  let transportStatus = 200;
  const transport = t.mock.method(globalThis, 'fetch', async (_url: string | URL | Request, init?: RequestInit) => {
    const params = new URLSearchParams(String(init?.body));
    assert.equal(params.get('Source'), 'admin@mynzocarbon.com');
    assert.equal(params.get('Destination.ToAddresses.member.1'), 'admin@mynzocarbon.com');
    assert.equal(params.get('ReplyToAddresses.member.1'), validEnquiry.email);
    assert.match(params.get('Message.Body.Html.Data')!, /Restoration monitoring/);
    assert.match(params.get('Message.Body.Text.Data')!, /Entry page: Restoration monitoring page/);
    return new Response('Mock transport response', { status: transportStatus });
  });
  t.mock.method(console, 'error', () => {});
  const makeRequest = () => new Request('http://localhost/api/contact', {
    method: 'POST', body: JSON.stringify({ ...validEnquiry,
      project_focus: 'restoration-monitoring', enquiry_source: 'restoration-monitoring',
    }),
  });
  const accepted = await POST(makeRequest());
  assert.equal(accepted.status, 200);
  assert.equal(isAcceptedEnquiry(accepted.ok, await accepted.json()), true);
  transportStatus = 503;
  const failed = await POST(makeRequest());
  assert.equal(failed.status, 500);
  assert.equal(isAcceptedEnquiry(failed.ok, await failed.json()), false);
  assert.equal(transport.mock.callCount(), 2);
});
