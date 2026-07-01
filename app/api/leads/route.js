import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const data = await req.json();
    console.log("LEAD:", JSON.stringify(data));
    return NextResponse.json({ success: true, id: `LEAD-${Date.now()}` });
  } catch { return NextResponse.json({ success: false }, { status: 500 }); }
}