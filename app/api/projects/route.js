import { NextResponse } from "next/server";
import { apiNotice, sampleProject, timeline } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    ok: true,
    notice: apiNotice,
    projects: [{ ...sampleProject, timeline }]
  });
}
