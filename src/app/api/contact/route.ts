import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, company, role, message } = body;

    const params = {
      Action: 'SendEmail',
      'Source': 'admin@mynzocarbon.com',
      'Destination.ToAddresses.member.1': 'admin@mynzocarbon.com',
      'ReplyToAddresses.member.1': email,
      'Message.Subject.Data': 'New Mynzo Get Started Request',
      'Message.Subject.Charset': 'UTF-8',
      'Message.Body.Html.Data': `
        <table style="font-family:sans-serif;font-size:15px;color:#222;border-collapse:collapse;width:100%;max-width:540px">
          <tr><td colspan="2" style="padding:0 0 16px"><strong>New Get Started request from mynzocarbon.com</strong></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;width:160px">Name</td><td style="padding:6px 0">${first_name} ${last_name}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Company</td><td style="padding:6px 0">${company}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555">Role</td><td style="padding:6px 0">${role}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">Message</td><td style="padding:6px 0">${message || '—'}</td></tr>
        </table>
      `,
      'Message.Body.Html.Charset': 'UTF-8',
      'Message.Body.Text.Data': `Name: ${first_name} ${last_name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nMessage: ${message || '—'}`,
      'Message.Body.Text.Charset': 'UTF-8',
    };

    // Build query string
    const query = new URLSearchParams(params).toString();

    // AWS SES request using Signature Version 4
    const region = 'ap-south-1';
    const service = 'ses';
    const host = `email.${region}.amazonaws.com`;
    const endpoint = `https://${host}/`;

    const now = new Date();
    const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '').slice(0, 15) + 'Z';
    const dateStamp = amzDate.slice(0, 8);

    const accessKey = process.env.AWS_ACCESS_KEY_ID!;
    const secretKey = process.env.AWS_SECRET_ACCESS_KEY!;

    // Helper: HMAC-SHA256
    async function hmac(key: ArrayBuffer | string, data: string): Promise<ArrayBuffer> {
      const keyData = typeof key === 'string' ? new TextEncoder().encode(key) : key;
      const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
      return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(data));
    }

    // Helper: SHA256 hex
    async function sha256hex(data: string): Promise<string> {
      const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
      return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Helper: ArrayBuffer to hex
    function bufToHex(buf: ArrayBuffer): string {
      return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    const payloadHash = await sha256hex(query);
    const canonicalHeaders = `content-type:application/x-www-form-urlencoded\nhost:${host}\nx-amz-date:${amzDate}\n`;
    const signedHeaders = 'content-type;host;x-amz-date';
    const canonicalRequest = `POST\n/\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
    const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
    const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await sha256hex(canonicalRequest)}`;

    const signingKey = await hmac(
      await hmac(
        await hmac(
          await hmac('AWS4' + secretKey, dateStamp),
          region
        ),
        service
      ),
      'aws4_request'
    );

    const signature = bufToHex(await hmac(signingKey, stringToSign));
    const authHeader = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Amz-Date': amzDate,
        'Authorization': authHeader,
      },
      body: query,
    });

    if (res.ok) {
      return NextResponse.json({ ok: true });
    } else {
      const errText = await res.text();
      console.error('SES error:', res.status, errText);
      return NextResponse.json({ ok: false, error: errText }, { status: 500 });
    }
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
