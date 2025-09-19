import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase.from("users").select("*");

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { telegram_id, username, level, languages } = body;

    const { data, error } = await supabase
      .from("users")
      .insert({ telegram_id, username, level, languages })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error: ", error.message);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Error: ", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
