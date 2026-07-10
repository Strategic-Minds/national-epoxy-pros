import { NextRequest, NextResponse } from 'next/server'

const BASE44_API = 'https://api.base44.com/api/apps/6a3a1cc6fda8cc665dd22ea4/entities/OutreachQueue'

function sanitize(str: string, max = 500): string {
  return String(str || '').trim().slice(0, max)
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Accept both homepage format (name/facilityType) and full form (full_name/consent)
    const name = sanitize(body.name || body.full_name || '')
    const email = sanitize(body.email || '').toLowerCase()
    const phone = sanitize(body.phone || '')
    const facilityType = sanitize(body.facilityType || body.facility_type || body.service_type || '')
    const sqFootage = sanitize(body.sqFootage || body.sq_footage || '')
    const timeline = sanitize(body.timeline || '')
    const source = sanitize(body.source || 'website')
    const notes = [facilityType && `Facility: ${facilityType}`, sqFootage && `Sq Ft: ${sqFootage}`, timeline && `Timeline: ${timeline}`].filter(Boolean).join(' | ')

    if (!name || name.length < 2) {
      return NextResponse.json({ success: false, error: 'Name required' }, { status: 400 })
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ success: false, error: 'Valid email required' }, { status: 400 })
    }

    // Write to Base44 OutreachQueue
    const base44Key = process.env.BASE44_API_KEY || ''
    const saved = base44Key ? await writeToBase44({
      contact_name: name, email, phone, source, 
      status: 'new', platform: 'website', campaign: 'nep_inbound',
      message_sent: notes || `New lead from ${source}`,
    }, base44Key) : false

    return NextResponse.json({
      success: true,
      saved,
      message: saved ? 'Lead captured successfully' : 'Lead received — stored pending integration',
    })
  } catch (err) {
    console.error('Lead API error:', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}

async function writeToBase44(data: Record<string, string>, apiKey: string): Promise<boolean> {
  try {
    const res = await fetch(BASE44_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-API-Key': apiKey },
      body: JSON.stringify(data),
    })
    return res.ok
  } catch {
    return false
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'NEP Lead API' })
}
