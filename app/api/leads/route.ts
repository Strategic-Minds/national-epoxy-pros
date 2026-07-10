import { NextRequest, NextResponse } from 'next/server'

const BASE44_ENDPOINT = 'https://superagent-5dd22ea4.base44.app/api/entities/OutreachQueue'

function sanitize(str: string, max = 500): string {
  return String(str || '').trim().slice(0, max)
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Accept both homepage short form (name/facilityType) and full quote form (full_name/consent)
    const name = sanitize(body.name || body.full_name || '')
    const email = sanitize(body.email || '').toLowerCase()
    const phone = sanitize(body.phone || '')
    const facilityType = sanitize(body.facilityType || body.facility_type || '')
    const sqFootage = sanitize(body.sqFootage || body.sq_footage || '')
    const timeline = sanitize(body.timeline || '')
    const source = sanitize(body.source || 'nep_website')

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, error: 'Name required' }, { status: 400 })
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 })
    }

    const notes = [
      facilityType && `Facility: ${facilityType}`,
      sqFootage && `Sq Ft: ${sqFootage}`,
      timeline && `Timeline: ${timeline}`,
    ].filter(Boolean).join(' | ')

    const apiKey = process.env.BASE44_API_KEY || ''
    const saved = apiKey ? await writeToBase44({
      contact_name: name,
      email,
      phone,
      source,
      status: 'new',
      platform: 'website',
      campaign: 'nep_inbound',
      message_sent: notes || `New lead via ${source}`,
    }, apiKey) : false

    return NextResponse.json({
      success: true,
      saved,
      message: saved
        ? 'Your request has been submitted. We\'ll be in touch within 1 business day.'
        : 'Request received — our team will follow up shortly.',
    })
  } catch (err) {
    console.error('[NEP Lead API]', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}

async function writeToBase44(data: Record<string, string>, apiKey: string): Promise<boolean> {
  try {
    const res = await fetch(BASE44_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': apiKey,
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      console.error('[NEP Lead API] Base44 write failed:', res.status, await res.text())
      return false
    }
    return true
  } catch (err) {
    console.error('[NEP Lead API] Base44 fetch error:', err)
    return false
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'NEP Lead Capture API v2' })
}
