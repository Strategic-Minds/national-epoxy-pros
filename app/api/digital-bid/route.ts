import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    
    if (!name || !phone || !email) {
      return NextResponse.json({ ok: false, error: 'Name, phone, and email are required.' }, { status: 400 });
    }
    
    // Forward to main leads endpoint
    return NextResponse.json({ 
      ok: true, 
      message: 'Your digital bid request was received. Our team will review and follow up within 24 hours.' 
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not process request.' }, { status: 500 });
  }
}
