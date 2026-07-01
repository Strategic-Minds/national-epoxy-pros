import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const data = await req.json();
    console.log("CONTACT:", JSON.stringify(data));
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ success: false }, { status: 500 }); }
}