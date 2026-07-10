import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('leads')
      .select('id, full_name, email, phone, source, stage, score, notes, tags, created_at, updated_at')
      .eq('source', 'nep_website')
      .order('created_at', { ascending: false })
      .limit(500)

    if (error) {
      console.error('Admin leads fetch error:', error.message)
      return NextResponse.json({ success: false, error: 'Failed to fetch leads' }, { status: 500 })
    }

    return NextResponse.json({ success: true, leads: data || [] })
  } catch (err) {
    console.error('Admin leads error:', err instanceof Error ? err.message : 'Unknown')
    return NextResponse.json({ success: false, error: 'Unexpected error' }, { status: 500 })
  }
}
