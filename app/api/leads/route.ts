import { NextResponse } from 'next/server';

const BASE44_API = process.env.BASE44_API_URL || 'https://app.base44.com/api';
const BASE44_KEY = process.env.BASE44_API_KEY || '';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const origin = req.headers.get('origin') || 'https://nationalepoxypros.com';

    const payload = {
      contact_name: body.name || 'Unknown',
      phone: body.phone || '',
      email: body.email || '',
      source: body.source || 'Website',
      status: 'new',
      message_sent: JSON.stringify(body),
      platform: 'web',
      campaign: body.campaign || 'organic',
    };

    let saved = false;
    if (BASE44_KEY) {
      try {
        await fetch(`${BASE44_API}/entities/OutreachQueue`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-api-key': BASE44_KEY },
          body: JSON.stringify(payload),
        });
        saved = true;
      } catch {}
    }

    return NextResponse.json({ success: true, saved }, { headers: { 'Access-Control-Allow-Origin': origin } });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}

export async function OPTIONS(req: Request) {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': req.headers.get('origin') || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
