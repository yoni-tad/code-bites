import { supabase } from "@/lib/supabase";
import { FeedbackSchema } from "@/schema/feedbackSchema";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET() {}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await FeedbackSchema.validate(body, { abortEarly: false });
    const { user_id, tip_id, reaction, reason } = body;

    const { data, error } = await supabase
      .from("feedback")
      .insert({
        user_id,
        tip_id,
        reaction,
        reason,
      })
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

    if (err instanceof yup.ValidationError) {
      return NextResponse.json({ error: err.errors }, { status: 400 });
    }

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
