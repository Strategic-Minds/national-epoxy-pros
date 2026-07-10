import { NextResponse } from 'next/server';

const LEADS_EMAIL = process.env.LEADS_EMAIL || 'leads@nationalepoxypros.com';
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'support@nationalepoxypros.com';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'National Epoxy Pros <onboarding@resend.dev>';

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function readLead(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  if (contentType.includes('multipart/form-data')) {
    const formData = await request.formData();
    const lead: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') lead[key] = value;
      else lead[key] = `${value.name} (${value.size} bytes)`;
    }
    return lead;
  }

  if (contentType.includes('application/json')) {
    return await request.json();
  }

  const formData = await request.formData();
  const lead: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    lead[key] = typeof value === 'string' ? value : `${value.name} (${value.size} bytes)`;
  }
  return lead;
}

function validateLead(lead: Record<string, unknown>) {
  const name = String(lead.name || '').trim();
  const phone = String(lead.phone || '').trim();
  const email = String(lead.email || '').trim();

  if (!name || !phone || !email) {
    return 'Name, phone, and email are required.';
  }

  if (!email.includes('@')) {
    return 'A valid email is required.';
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const lead = await readLead(request);
    const validationError = validateLead(lead);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    const rows = Object.entries(lead)
      .map(([key, value]) => `<tr><td style="font-weight:700;padding:6px 10px;border:1px solid #ddd;">${escapeHtml(key)}</td><td style="padding:6px 10px;border:1px solid #ddd;">${escapeHtml(value)}</td></tr>`)
      .join('');

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111;">
        <h1>New National Epoxy Pros Lead</h1>
        <p>A lead was submitted from the website.</p>
        <table style="border-collapse:collapse;width:100%;max-width:760px;">${rows}</table>
      </div>
    `;

    const subject = `New NEP Lead: ${lead.name || 'Website Lead'}`;

    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [LEADS_EMAIL],
          cc: [SUPPORT_EMAIL],
          subject,
          html,
        }),
      });

      if (!response.ok) {
        const detail = await response.text();
        return NextResponse.json({ ok: false, error: 'Email provider rejected the lead.', detail }, { status: 502 });
      }

      return NextResponse.json({ ok: true, delivered: true });
    }

    console.log('NATIONAL_EPOXY_PROS_LEAD', JSON.stringify({ lead, createdAt: new Date().toISOString() }));
    return NextResponse.json({ ok: true, delivered: false, warning: 'Request received. Team will follow up within 24 hours.' });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
