import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params
    const body = await request.json()
    const supabase = getSupabaseAdmin()

    const allowed = ['new', 'reviewing', 'contacted', 'qualified', 'estimate_needed', 'proposal_sent', 'won', 'lost', 'spam']
    const updates: Record<string, string> = {}

    if (body.stage) {
      if (!allowed.includes(body.stage)) {
        return NextResponse.json({ success: false, error: 'Invalid stage value' }, { status: 400 })
      }
      updates.stage = body.stage
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ success: false, error: 'No valid fields to update' }, { status: 400 })
    }

    const { error } = await supabase
      .from('leads')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .eq('source', 'nep_website')

    if (error) {
      console.error('Update error:', error.message)
      return NextResponse.json({ success: false, error: 'Update failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Admin PATCH error:', err instanceof Error ? err.message : 'Unknown')
    return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 })
  }
}
