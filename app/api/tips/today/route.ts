import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();
    const start = new Date(today.setUTCHours(0, 0, 0, 0)).toISOString();
    const end = new Date(today.setUTCHours(23, 59, 59, 999)).toISOString();
    const { data, error } = await supabase
      .from("tips")
      .select("*")
      .gte("created_at", start)
      .lte("created_at", end).single();

    if (error) {
      console.error("Supabase select error: ", error.message);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    console.error("Error: ", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
