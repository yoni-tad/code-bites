import { supabase } from "@/lib/supabase";
import { tipsSchema } from "@/schema/tipsSchema";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET() {
  try {
    const { data, error } = await supabase.from("tips").select("*");

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
    await tipsSchema.validate(body, { abortEarly: false });
    const { title, topContent, code, bottomContent, language, level } = body;

    const { data, error } = await supabase
      .from("tips")
      .insert({
        title,
        topContent,
        code,
        bottomContent,
        language,
        level,
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
