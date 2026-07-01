import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const data = await req.json();
    console.log("DIGITAL_BID:", JSON.stringify(data));
    return NextResponse.json({ success: true, estimateId: `EST-${Date.now()}`, message: "Bid received. Estimate within 24 hours." });
  } catch { return NextResponse.json({ success: false }, { status: 500 }); }
}