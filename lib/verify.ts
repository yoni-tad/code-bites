"use client"

import WebApp from "@twa-dev/sdk";
import crypto from "crypto";

const TOKEN = process.env.BOT_TOKEN!;

export function verifyTelegramInitData(initData: Record<string, any>): {
  ok: boolean;
  user?: any;
} {
  console.log("Test from verify.ts")
  console.log(WebApp)




  const { hash, signature, ...rest } = initData;
  if (!hash) return { ok: false };

  // console.log(`init data: ${initData}`)
  // console.log(`hash data: ${hash}`)

  // const urlParams = new URLSearchParams(initData);
  // const hash = urlParams.get("hash");
  // urlParams.delete("hash");

  // const data: Record<string, string> = {};
  // urlParams.forEach((val, key) => {
  //   data[key] = val;
  // });

  // const dataCheckString = [...urlParams.entries()]
  //   .sort((a, b) => a[0].localeCompare(b[0]))
  //   .map(([k, v]) => `${k}=${v}`)
  //   .join("\n");

  const dataCheckString = Object.entries(rest)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return `${key}=${JSON.stringify(value)}`;
      }
      return `${key}=${value}`;
    })
    .sort((a, b) => a.localeCompare(b))
    .join("\n");

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(TOKEN)
    .digest();

  const _hash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  // console.log(`dataCheckString: ${dataCheckString}`)
  // console.log(`hash: ${hash}`)
  // console.log(`_hash: ${_hash}`)

  if (hash !== _hash) {
    return { ok: false };
  }

  try {
    const user = JSON.parse(initData.user);
    return { ok: true, user };
  } catch {
    return { ok: true, user: initData };
  }
}
