import { NextResponse } from 'next/server';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, company, role, message } = body;

    const msg = {
      to: 'support@mynzocarbon.com',
      from: 'support@mynzocarbon.com', // verified sender in SendGrid
      replyTo: email,
      subject: 'New Mynzo Get Started Request',
      text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nMessage: ${message || '—'}`,
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#222;border-collapse:collapse;width:100%;max-width:540px">
          <tr><td colspan="2" style="padding:0 0 16px"><strong>New Get Started request from mynzocarbon.com</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0">${first_name} ${last_name}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Company</td><td style="padding:6px 0">${company}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Role</td><td style="padding:6px 0">${role}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">Message</td><td style="padding:6px 0">${message || '—'}</td></tr>
        </table>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('SendGrid error:', JSON.stringify(err));
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
