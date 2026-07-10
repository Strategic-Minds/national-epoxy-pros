import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { generateQuoteNumber } from '@/lib/generateQuoteNumber'

function sanitize(str: string, maxLength: number = 1000): string {
  return str.trim().slice(0, maxLength)
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const errors: string[] = []
    const fullName = sanitize(body.full_name || '', 100)
    const email = sanitize(body.email || '', 200).toLowerCase()
    const phone = sanitize(body.phone || '', 20)
    const consent = body.consent === true

    if (!fullName || fullName.length < 2) errors.push('Full name is required')
    if (!email || !validateEmail(email)) errors.push('Valid email is required')
    if (!phone || !validatePhone(phone)) errors.push('Valid phone number is required')
    if (!consent) errors.push('Consent is required')

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    const supabase = getSupabaseAdmin()

    // Rate limiting: 1 submission per email per 24h
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const { data: existing } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
      .eq('source', 'nep_website')
      .gte('created_at', twentyFourHoursAgo)
      .limit(1)
      .maybeSingle()

    if (existing) {
      return NextResponse.json(
        { success: false, error: 'A quote request was already submitted from this email in the last 24 hours. We will be in touch soon.' },
        { status: 429 }
      )
    }

    const quoteNumber = generateQuoteNumber()

    // Build a structured notes summary
    const notesParts = [
      `Quote: ${quoteNumber}`,
      body.project_type && `Type: ${sanitize(body.project_type, 50)}`,
      body.customer_type && `Customer: ${sanitize(body.customer_type, 50)}`,
      body.square_footage && `Sqft: ${body.square_footage}`,
      body.floor_system && `System: ${sanitize(body.floor_system, 50)}`,
      body.finish && `Finish: ${sanitize(body.finish, 50)}`,
      (body.city || body.state) && `Location: ${[body.city, body.state].filter(Boolean).map(s => sanitize(s, 100)).join(', ')}`,
      body.timeline && `Timeline: ${sanitize(body.timeline, 100)}`,
      body.notes && `Notes: ${sanitize(body.notes, 500)}`,
      `Contact pref: ${sanitize(body.preferred_contact || 'Not specified', 50)}`,
      `Best time: ${sanitize(body.best_time || 'Not specified', 100)}`,
      `Consent: Yes`,
    ].filter(Boolean).join(' | ')

    const leadData = {
      full_name: fullName,
      email,
      phone,
      source: 'nep_website',
      stage: 'new',
      score: 50,
      notes: notesParts,
      tags: [
        body.project_type?.toLowerCase(),
        body.floor_system?.toLowerCase().replace(/\s+/g, '_'),
        'website_quote',
      ].filter(Boolean),
    }

    const { data: inserted, error: insertError } = await supabase
      .from('leads')
      .insert(leadData)
      .select('id')
      .single()

    if (insertError) {
      console.error('Supabase insert error:', insertError.message)
      return NextResponse.json(
        { success: false, error: 'Unable to save your request. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, quoteNumber, id: inserted?.id }, { status: 201 })
  } catch (err) {
    console.error('Lead submission error:', err instanceof Error ? err.message : 'Unknown error')
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 })
}
