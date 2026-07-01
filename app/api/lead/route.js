import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    // Log lead — extend to HubSpot/Supabase/email as needed
    console.log("LEAD:", JSON.stringify(data));
    // TODO: POST to HubSpot portal 245655125
    // TODO: INSERT to Supabase outreach_queue
    return NextResponse.json({ success: true, message: "Bid request received" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}