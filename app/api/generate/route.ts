import { generateTip } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await generateTip("PHP", "Advanced")

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  } catch (err) {
    console.error("Error: ", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}