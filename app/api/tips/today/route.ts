import { supabase } from "@/lib/supabase";
import { verifyTelegramInitData } from "@/lib/verify";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { initData } = body

    // const initData = req.headers["x-telegram-init-data"] as string;
    console.log("Test from today post api")
    console.log(body)
    console.log(body.initDataString.hash)
    
    const { ok, user } = verifyTelegramInitData(body.initDataString);
    console.log(user)
    if (!ok) throw Error("Unauthorized access");

    const today = new Date();
    const start = new Date(today.setUTCHours(0, 0, 0, 0)).toISOString();
    const end = new Date(today.setUTCHours(23, 59, 59, 999)).toISOString();
    const { data, error } = await supabase
      .from("tips")
      .select("*")
      .gte("created_at", start)
      .lte("created_at", end)
      .limit(1)
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
