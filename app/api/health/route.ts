import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ status: "ok", leadWebhookConfigured: Boolean(process.env.GHL_LEAD_WEBHOOK_URL) }, { headers: { "Cache-Control": "no-store" } });
}
