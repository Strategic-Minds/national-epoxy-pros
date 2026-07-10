import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const leadId = formData.get('lead_id') as string | null
    const description = (formData.get('description') as string || '').slice(0, 200)

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 })
    }
    if (!leadId) {
      return NextResponse.json({ success: false, error: 'lead_id is required' }, { status: 400 })
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ success: false, error: 'File type not allowed. Use JPEG, PNG, WebP, HEIC, or PDF.' }, { status: 400 })
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ success: false, error: 'File exceeds 10MB limit' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    // Verify lead exists
    const { data: lead } = await supabase
      .from('leads')
      .select('id')
      .eq('id', leadId)
      .maybeSingle()

    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const safeFilename = `${leadId}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const { error: uploadError } = await supabase.storage
      .from('lead-assets')
      .upload(safeFilename, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      console.error('Storage upload error:', uploadError.message)
      return NextResponse.json({ success: false, error: 'Upload failed. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      path: safeFilename,
      filename: file.name,
      size: file.size,
      type: file.type,
    }, { status: 201 })
  } catch (err) {
    console.error('Upload error:', err instanceof Error ? err.message : 'Unknown')
    return NextResponse.json({ success: false, error: 'Upload failed unexpectedly.' }, { status: 500 })
  }
}
