import { NextResponse } from "next/server";

const BASE44_LEAD_ENDPOINT = "https://superagent-5dd22ea4.base44.app/functions/receiveNepLead";

export async function POST(req) {
  try {
    const data = await req.json();
    const r = await fetch(BASE44_LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, formType: "digital-bid" }),
    });
    const result = await r.json();
    return NextResponse.json({
      success: true,
      estimateId: result.id || `EST-${Date.now()}`,
      message: "Bid received. Estimate within 24 hours.",
    });
  } catch (e) {
    console.error("DIGITAL_BID forward failed:", e);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
