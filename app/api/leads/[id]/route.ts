import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = getSupabaseAdmin()
    const { data, error } = await supabase
      .from('leads')
      .select('quote_number, status, project_type, floor_system, created_at')
      .eq('id', params.id)
      .maybeSingle()

    if (error) {
      return NextResponse.json(
        { success: false, error: 'Unable to retrieve lead' },
        { status: 500 }
      )
    }

    if (!data) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, lead: data }, { status: 200 })
  } catch {
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
