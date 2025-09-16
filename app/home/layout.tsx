import BottomNav from "@/components/home/BottomNav";
import { Briefcase, Flame, Settings } from "lucide-react";
import React from "react";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="">
        <div className="pb-20">
            {children}
        </div>
        <div className="fixed bottom-0 left-0 right-0">
            <div className="flex justify-between items-center px-14 py-4 bg-neutral-900">
                <BottomNav title="Today" icon={<Flame size={26} />} router="/home" active="home" />
                <BottomNav title="Past Tips" icon={<Briefcase size={26} />} router="/home/past" active="past" />
                <BottomNav title="Settings" icon={<Settings size={26} />} router="/home/settings" active="settings" />
            </div>
        </div>
    </div>
}