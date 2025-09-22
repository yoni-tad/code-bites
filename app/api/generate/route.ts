import { generateTip } from "@/lib/gemini";
import { supabase } from "@/lib/supabase";
import { GenerateSchema } from "@/schema/generateSchema";
import { NextResponse } from "next/server";
import * as yup from "yup";

const LANGUAGES = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "TypeScript",
  "PHP",
  "Golang",
  "Rust",
  "SQL",
  "Kotlin",
  "Swift",
  "Dart",
  "React",
  "ReactNative",
  "Nextjs",
];
const LEVELS = ["Beginner", "Intermediate", "Experienced"];
let index = 0;
export async function POST(req: Request) {
  try {
    const total = LANGUAGES.length * LEVELS.length;
    const pair = index % total;
    const language = LANGUAGES[Math.floor(pair / LEVELS.length)];
    const level = LEVELS[pair % LANGUAGES.length];
    index++;

    const { data: existing } = await supabase
      .from("tips")
      .select("*")
      .eq("language", language)
      .eq("level", level)
      .eq("created_at", new Date().toISOString().slice(0, 10));

    if (existing && existing.length > 0) {
      throw new Error(`Tip already exists for ${language} today, skip..`);
    }

    const tip = await generateTip(language, level);
    if (!tip?.title || !tip?.introduction || !tip?.code || !tip?.conclusion) {
      throw new Error(`Invalid tip json format for ${language} (${level}`);
    }
    const { error } = await supabase.from("tips").insert([
      {
        title: tip.title,
        topContent: tip.title,
        code: tip.code,
        bottomContent: tip.conclusion,
        language,
        level,
      },
    ]);

    if (error) throw error;

    console.log(
      `Generated tip for ${language} (${level}) successfully inserted`
    );

    return NextResponse.json({ success: true, data: tip }, { status: 200 });
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
