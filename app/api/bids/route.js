import { NextResponse } from "next/server";
import { apiNotice, sampleProject, selectedSystem } from "@/lib/data";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  return NextResponse.json(
    {
      ok: true,
      notice: apiNotice,
      bid: {
        id: `BID-${Date.now()}`,
        customer: body.fullName || body.name || "New Project",
        status: "sandbox-created",
        nextRoute: "/dashboard",
        selectedSystem,
        project: sampleProject
      }
    },
    { status: 201 }
  );
}
