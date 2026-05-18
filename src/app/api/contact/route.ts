import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, company, role, message } = body;

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: 'support@mynzocarbon.com' }] }],
        from: { email: 'support@mynzocarbon.com', name: 'Mynzo Website' },
        reply_to: { email: email, name: `${first_name} ${last_name}` },
        subject: 'New Mynzo Get Started Request',
        content: [
          {
            type: 'text/html',
            value: `
              <table style="font-family:sans-serif;font-size:15px;color:#222;border-collapse:collapse;width:100%;max-width:540px">
                <tr><td colspan="2" style="padding:0 0 16px"><strong>New Get Started request from mynzocarbon.com</strong></td></tr>
                <tr><td style="padding:6px 12px 6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0">${first_name} ${last_name}</td></tr>
                <tr><td style="padding:6px 12px 6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:6px 12px 6px 0;color:#555">Company</td><td style="padding:6px 0">${company}</td></tr>
                <tr><td style="padding:6px 12px 6px 0;color:#555">Role</td><td style="padding:6px 0">${role}</td></tr>
                <tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">Message</td><td style="padding:6px 0">${message || '—'}</td></tr>
              </table>
            `,
          },
        ],
      }),
    });

    if (res.status === 202) {
      return NextResponse.json({ ok: true });
    } else {
      const errText = await res.text();
      console.error('SendGrid error:', res.status, errText);
      return NextResponse.json({ ok: false, error: errText }, { status: 500 });
    }
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
