import BottomNav from "@/components/home/BottomNav";
import { Briefcase, Flame, Settings } from "lucide-react";
import React from "react";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="">
        <div className="pb-20">
            {children}
        </div>
        <div className="flex justify-center w-full fixed bottom-2 left-0 right-0">
            <div className="w-sm">
                <div className="flex justify-around rounded-full items-center py-3 bg-neutral-900 w-full">
                    <BottomNav title="Today" icon={<Flame size={20} />} router="/home" active="home" />
                    <BottomNav title="Past Tips" icon={<Briefcase size={20} />} router="/home/past" active="past" />
                    <BottomNav title="Settings" icon={<Settings size={20} />} router="/home/settings" active="settings" />
                </div>
            </div>
        </div>
    </div>
}