"use client"

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CustomNavigation({ active }: any) {
    const route = useRouter();

    return <div className="flex items-center justify-between">
        <div className="bg-white/20 rounded-full p-3" onClick={() => route.back()}>
            <ArrowLeft />
        </div>
        <div className="flex gap-1">
            <div className={`h-3 rounded-full ${active == 'one' ? 'bg-lime-400 w-7' : 'bg-white/20 w-4'}`}></div>
            <div className={`h-3 rounded-full ${active == 'two' ? 'bg-lime-400 w-7' : 'bg-white/20 w-4'}`}></div>
        </div>
    </div>
}