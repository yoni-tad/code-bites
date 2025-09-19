import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function SplashScreen() {
  return (
    <div className="font-lato grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Toaster />
        <Image
          src="/logo-1.png"
          alt="Code Bites"
          width={180}
          height={38}
        />
        <p className="text-2xl font-semibold">Code Bites</p>
      </main>
    </div>
  );
}
