export const PROJECT_FOCUS_OPTIONS = [
  { value: 'biodiversity-monitoring', label: 'Biodiversity monitoring' },
  { value: 'forest-monitoring', label: 'Forest monitoring' },
  { value: 'digital-mrv', label: 'Digital MRV / carbon reporting' },
  { value: 'restoration-monitoring', label: 'Restoration monitoring' },
  { value: 'other', label: 'Other' },
] as const;

const ENQUIRY_SOURCES = {
  'biodiversity-monitoring': 'Biodiversity monitoring page',
  'restoration-monitoring': 'Restoration monitoring page',
  'project-developers': 'Project developers page',
  'biodiversity-guide': 'Biodiversity monitoring guide',
  'restoration-guide': 'Restoration monitoring plan guide',
  'agroforestry-guide': 'Agroforestry guide',
  'forest-carbon-guide': 'Forest carbon accounting guide',
  'forest-monitoring': 'Forest monitoring page',
  'digital-mrv': 'Digital MRV page',
} as const;

export type ProjectFocus = typeof PROJECT_FOCUS_OPTIONS[number]['value'];
export type EnquirySource = keyof typeof ENQUIRY_SOURCES;
export type EnquiryContext = {
  project_focus?: ProjectFocus;
  enquiry_source?: EnquirySource;
};

export function normaliseEnquiryContext(input: {
  project_focus?: unknown;
  enquiry_source?: unknown;
}): EnquiryContext {
  const context: EnquiryContext = {};
  if (PROJECT_FOCUS_OPTIONS.some(option => option.value === input.project_focus)) {
    context.project_focus = input.project_focus as ProjectFocus;
  }
  if (typeof input.enquiry_source === 'string' && Object.hasOwn(ENQUIRY_SOURCES, input.enquiry_source)) {
    context.enquiry_source = input.enquiry_source as EnquirySource;
  }
  return context;
}

export function enquiryContextFromSearch(search: string): EnquiryContext {
  const params = new URLSearchParams(search);
  // Only the four monitoring interests are used for page-to-form links.
  const interest = params.get('interest');
  return normaliseEnquiryContext({
    project_focus: interest === 'other' ? undefined : interest,
    enquiry_source: params.get('source'),
  });
}

export function isAcceptedEnquiry(responseOk: boolean, result: unknown): boolean {
  return responseOk && typeof result === 'object' && result !== null && 'ok' in result && result.ok === true;
}

export type Enquiry = EnquiryContext & {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

export const ENQUIRY_LIMITS = {
  first_name: 100,
  last_name: 100,
  email: 254,
  company: 200,
  role: 150,
  message: 5000,
} as const;

export function validateEnquiry(input: unknown): Enquiry | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const values = input as Record<string, unknown>;
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(ENQUIRY_LIMITS)) {
    const value = values[key] ?? (key === 'message' ? '' : undefined);
    if (typeof value !== 'string' || value.length > limit) return null;
    const trimmed = value.trim();
    if (key !== 'message' && (!trimmed || /[\r\n]/.test(trimmed))) return null;
    fields[key] = trimmed;
  }
  if (!/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(fields.email)) return null;
  const context = normaliseEnquiryContext(values);
  if (values.project_focus && !context.project_focus) return null;
  if (values.enquiry_source && !context.enquiry_source) return null;
  return { ...fields, ...context } as Enquiry;
}

export function escapeEmailHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

export function buildEnquiryEmail(enquiry: Enquiry): { html: string; text: string } {
  const focus = PROJECT_FOCUS_OPTIONS.find(option => option.value === enquiry.project_focus)?.label || 'Not specified';
  const source = enquiry.enquiry_source ? ENQUIRY_SOURCES[enquiry.enquiry_source] : 'Get started form';
  const rows = [
    ['Name', `${enquiry.first_name} ${enquiry.last_name}`],
    ['Email', enquiry.email],
    ['Company', enquiry.company],
    ['Role', enquiry.role],
    ['Project focus', focus],
    ['Entry page', source],
    ['Message', enquiry.message || 'Not provided'],
  ];
  return {
    html: `<table style="font-family:sans-serif;font-size:15px;color:#222;border-collapse:collapse;width:100%;max-width:540px">
      <tr><td colspan="2" style="padding:0 0 16px"><strong>New Get Started request from mynzocarbon.com</strong></td></tr>
      ${rows.map(([label, value]) => `<tr><td style="padding:6px 12px 6px 0;color:#555;width:160px;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeEmailHtml(value)}</td></tr>`).join('\n')}
    </table>`,
    text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
  };
}
