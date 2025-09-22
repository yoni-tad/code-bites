import cron from "node-cron";
import { supabase } from "./supabase";
import { generateTip } from "./gemini";

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
cron.schedule("*/3 * * * *", async () => {
  console.log("🔥 Cron start working");
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
    console.log(`Tip already exists for ${language} today, skip..`);
    return;
  }

  try {
    

  } catch (err) {
    console.error(`Failed for ${language} (${level}): `, err);
  }
});
