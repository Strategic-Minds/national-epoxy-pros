import { NextResponse } from "next/server";
import { apiNotice, uploads } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ ok: true, notice: apiNotice, uploads });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json(
    {
      ok: true,
      notice: apiNotice,
      upload: {
        id: `up_${Date.now()}`,
        label: body.label || "Project photo",
        status: "sandbox-received"
      }
    },
    { status: 201 }
  );
}
