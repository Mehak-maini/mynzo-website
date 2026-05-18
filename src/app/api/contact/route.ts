import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, company, role, message } = body;

    await sgMail.send({
      to: 'support@mynzocarbon.com',
      from: 'support@mynzocarbon.com', // must be a verified sender in SendGrid
      replyTo: email,
      subject: 'New Mynzo Get Started Request',
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
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('SendGrid error:', err);
    return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 500 });
  }
}
