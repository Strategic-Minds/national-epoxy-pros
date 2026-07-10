import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ message: 'Lead lookup — pending integration' }, { status: 200 });
}
