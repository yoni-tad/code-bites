"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

export default function SplashScreen() {
  const route = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      route.push('/home')
    }, 1000);

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="font-lato grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Toaster />
        <div className="fixed left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center">
          <Image
            src="/logo-1.png"
            alt="Code Bites"
            width={180}
            height={38}
          />
          <TypeAnimation sequence={["Code Bites", 1000]} wrapper="span" repeat={Infinity} speed={10} style={{ fontSize: '2em', display: 'inline-block' }} />
        </div>
      </main>
    </div>
  );
}
