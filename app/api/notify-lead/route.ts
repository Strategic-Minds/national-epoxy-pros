import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not defined')
      return NextResponse.json({ success: false, error: 'Resend API key is missing' }, { status: 500 })
    }

    const body = await request.json()
    const { full_name, email, phone, property_type, project_size_sqft, timeline, message } = body

    if (!full_name || !email) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const companyEmailHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#f9f9f9;margin:0;padding:20px}.container{max-width:600px;margin:0 auto;background:#fff;border:1px solid #e1e1e1;border-radius:8px;overflow:hidden}.header{background:linear-gradient(135deg,#1e1e24,#0f0f12);color:#f5bc3e;padding:30px;text-align:center}.header h1{margin:0;font-size:24px;text-transform:uppercase;letter-spacing:1px}.content{padding:30px}.lead-name{font-size:20px;font-weight:700;color:#1e1e24;border-bottom:2px solid #f5bc3e;padding-bottom:10px;margin-bottom:20px}.field-item{border-bottom:1px solid #f0f0f0;padding-bottom:10px;margin-bottom:10px}.field-label{font-size:12px;font-weight:600;text-transform:uppercase;color:#8c8c8c;margin-bottom:4px}.field-value{font-size:16px;color:#1e1e24}.message-box{background:#f7f7f9;border-left:4px solid #f5bc3e;padding:15px;border-radius:0 4px 4px 0;margin-top:10px}.footer{background:#f4f4f5;text-align:center;padding:15px;font-size:12px;color:#6c757d;border-top:1px solid #e1e1e1}</style></head><body><div class="container"><div class="header"><h1>National Epoxy Pros</h1><p style="margin:8px 0 0;color:#ccc;font-size:14px">New Lead Submitted</p></div><div class="content"><div class="lead-name">New Lead: ${full_name}</div><div class="field-item"><div class="field-label">Full Name</div><div class="field-value">${full_name}</div></div><div class="field-item"><div class="field-label">Email</div><div class="field-value"><a href="mailto:${email}" style="color:#f5bc3e;text-decoration:none;font-weight:600">${email}</a></div></div><div class="field-item"><div class="field-label">Phone</div><div class="field-value"><a href="tel:${phone}" style="color:#f5bc3e;text-decoration:none;font-weight:600">${phone}</a></div></div><div class="field-item"><div class="field-label">Property Type</div><div class="field-value">${property_type || 'N/A'}</div></div><div class="field-item"><div class="field-label">Project Size</div><div class="field-value">${project_size_sqft ? project_size_sqft + ' sq ft' : 'N/A'}</div></div><div class="field-item"><div class="field-label">Timeline</div><div class="field-value">${timeline || 'N/A'}</div></div><div class="field-label" style="margin-top:20px">Message</div><div class="message-box"><p style="margin:0;font-size:15px;white-space:pre-wrap">${message || 'No additional details.'}</p></div></div><div class="footer">Submitted via the National Epoxy Pros online quote funnel.</div></div></body></html>`

    const leadEmailHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:#f9f9f9;margin:0;padding:20px}.container{max-width:600px;margin:0 auto;background:#fff;border:1px solid #e1e1e1;border-radius:8px;overflow:hidden}.header{background:linear-gradient(135deg,#1e1e24,#0f0f12);color:#f5bc3e;padding:30px;text-align:center}.header h1{margin:0;font-size:24px;text-transform:uppercase;letter-spacing:1px}.content{padding:30px}.cta-button{display:inline-block;background:linear-gradient(135deg,#f5bc3e,#e0a31b);color:#000;text-decoration:none;font-weight:700;padding:12px 24px;border-radius:6px;margin-top:10px;font-size:14px;text-transform:uppercase}.footer{background:#f4f4f5;text-align:center;padding:15px;font-size:12px;color:#6c757d;border-top:1px solid #e1e1e1}</style></head><body><div class="container"><div class="header"><h1>National Epoxy Pros</h1></div><div class="content"><p style="font-size:18px;font-weight:600;color:#1e1e24">Hi ${full_name},</p><p>Thank you for requesting a custom quote from National Epoxy Pros! We received your submission and our flooring specialists are already reviewing your project details.</p><p>We will reach out shortly via phone or email.</p><div style="background:#fffaf0;border:1px solid #ffe6a3;padding:20px;border-radius:6px;margin-top:30px;text-align:center"><p style="margin:0 0 10px;font-weight:600;color:#1e1e24">Want to speak with someone right away?</p><a href="https://nationalepoxypros.com/quote" class="cta-button">Back to Site</a></div></div><div class="footer">&copy; ${new Date().getFullYear()} National Epoxy Pros. All rights reserved.</div></div></body></html>`

    const companyRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: 'National Epoxy Pros <noreply@nationalepoxypros.com>',
        to: 'leads@nationalepoxypros.com',
        subject: `New Lead: ${full_name} \u2014 National Epoxy Pros`,
        html: companyEmailHtml,
      }),
    })

    if (!companyRes.ok) {
      const err = await companyRes.text()
      console.error('Company email failed:', err)
      return NextResponse.json({ success: false, error: 'Failed to send notification email' }, { status: 502 })
    }

    const leadRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        from: 'National Epoxy Pros <noreply@nationalepoxypros.com>',
        to: email,
        subject: 'We Received Your Quote Request! \u2014 National Epoxy Pros',
        html: leadEmailHtml,
      }),
    })

    if (!leadRes.ok) {
      console.error('Lead confirmation email failed')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('notify-lead error:', err instanceof Error ? err.message : err)
    return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 })
  }
}
