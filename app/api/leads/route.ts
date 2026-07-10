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
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

    const { data: existing } = await supabase
      .from('leads')
      .select('id')
      .eq('email', email)
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

    const leadData = {
      quote_number: quoteNumber,
      project_type: sanitize(body.project_type || '', 50),
      customer_type: sanitize(body.customer_type || '', 50),
      square_footage: Math.max(0, parseInt(body.square_footage) || 0),
      city: sanitize(body.city || '', 100),
      state: sanitize(body.state || '', 50),
      zip: sanitize(body.zip || '', 10),
      timeline: sanitize(body.timeline || '', 100),
      measurement_method: sanitize(body.measurement_method || '', 50),
      length: parseFloat(body.length) || 0,
      width: parseFloat(body.width) || 0,
      access_notes: sanitize(body.access_notes || '', 1000),
      surface_type: sanitize(body.surface_type || '', 50),
      existing_coating: sanitize(body.existing_coating || '', 50),
      floor_system: sanitize(body.floor_system || '', 50),
      color_preference: sanitize(body.color_preference || '', 500),
      finish: sanitize(body.finish || '', 50),
      concrete_conditions: Array.isArray(body.concrete_conditions) ? body.concrete_conditions.slice(0, 20) : [],
      coating_removal: Boolean(body.coating_removal),
      notes: sanitize(body.notes || '', 2000),
      full_name: fullName,
      email,
      phone,
      preferred_contact: sanitize(body.preferred_contact || '', 20),
      best_time: sanitize(body.best_time || '', 100),
      consent: true,
      file_count: Math.max(0, parseInt(body.file_count) || 0),
      status: 'new',
    }

    const { error: insertError } = await supabase
      .from('leads')
      .insert(leadData)

    if (insertError) {
      console.error('Supabase insert error:', insertError.message)
      return NextResponse.json(
        { success: false, error: 'Unable to save your request. Please try again or contact us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, quoteNumber }, { status: 201 })
  } catch (err) {
    console.error('Lead submission error:', err instanceof Error ? err.message : 'Unknown error')
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again or contact us directly.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'Method not allowed' },
    { status: 405 }
  )
}
