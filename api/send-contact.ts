export const config = { runtime: 'edge' };

function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderHtml({ name, email, subject, message }: { name: string; email: string; subject?: string; message: string }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || '(no subject)');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  return `
  <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;color:#0f172a;background:#f8fafc;padding:24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;border:1px solid rgba(15,23,42,0.06);box-shadow:0 10px 30px rgba(2,6,23,0.06);">
      <tr>
        <td style="padding:24px 24px 0 24px;">
          <h2 style="margin:0 0 8px 0;color:#0f172a;font-size:18px;">New portfolio contact</h2>
          <p style="margin:0;color:#334155;">You've received a new message from your portfolio contact form.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 0 24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;border-radius:12px;">
            <tr>
              <td style="padding:16px 16px 0 16px;">
                <p style="margin:0 0 6px 0;color:#475569;"><strong>Name:</strong> ${safeName}</p>
                <p style="margin:0 0 6px 0;color:#475569;"><strong>Email:</strong> ${safeEmail}</p>
                <p style="margin:0;color:#475569;"><strong>Subject:</strong> ${safeSubject}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px;">
                <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:10px;padding:12px;color:#0f172a;line-height:1.6;">${safeMessage}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px 24px 24px;color:#64748b;font-size:12px;">
          <p style="margin:0;">Reply directly to this email to respond to the sender.</p>
        </td>
      </tr>
    </table>
  </div>`;
}

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Allow': 'POST', 'content-type': 'application/json' },
    });
  }

  let payload: any = null;
  try {
    payload = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const name = (payload?.name || '').toString().trim();
  const email = (payload?.email || '').toString().trim();
  const subject = (payload?.subject || '').toString().trim();
  const message = (payload?.message || '').toString().trim();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Missing fields: name, email, and message are required.' }),
      { status: 400, headers: { 'content-type': 'application/json' } }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Email service is not configured on the server.' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }

  const toEnv = process.env.EMAIL_TO || 'kiruluchamika2002@gmail.com';
  const to = toEnv.split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.EMAIL_FROM || 'Portfolio Contact <onboarding@resend.dev>';

  const emailPayload = {
    from,
    to,
    subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
    html: renderHtml({ name, email, subject, message }),
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || '(none)'}\n\n${message}`,
    reply_to: email,
  } as Record<string, any>;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return new Response(
        JSON.stringify({ error: `Email API error: ${errText}` }),
        { status: 502, headers: { 'content-type': 'application/json' } }
      );
    }

    const data = await resp.json().catch(() => ({}));

    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err?.message || 'Failed to send email' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
