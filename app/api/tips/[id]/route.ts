import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id;
    const { data, error } = await supabase
      .from("tips")
      .select("*")
      .eq("id", id)
      .single();

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
