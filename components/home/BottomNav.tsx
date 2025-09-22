"use client"

import { usePathname, useRouter } from "next/navigation";

interface NavProps {
    title: string;
    icon: React.ReactNode;
    router: string;
    active?: string
}

export default function BottomNav({ title, icon, router, active }: NavProps) {
    const route = useRouter()
    const path = usePathname()
    const current = path.substring(path.lastIndexOf('/') + 1) == active

    return <div className={`flex flex-col items-center gap-1 ${current ? 'text-lime-400' : 'text-white/50'}`} onClick={() => route.push(router)}>
        {icon}
        <p className={`text-xs`}>{title}</p>
    </div>
}