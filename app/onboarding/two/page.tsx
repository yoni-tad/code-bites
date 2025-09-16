"use client"

import CustomButton from "@/components/onboarding/CustomButton";
import CustomNavigation from "@/components/onboarding/CustomNavigation";
import CustomPick from "@/components/onboarding/CustomPick";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StepTwo() {
    const [pick, setPick] = useState<string[]>([])
    const route = useRouter()

    const togglePick = (item: string) => {
        setPick((prev) =>
            prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
        )
    }

    const languages = ['PHP', 'Python', 'React', 'Next Js', 'Angular']

    return <div className="flex flex-col h-screen">
        <div className="flex-1 space-y-6">
            <CustomNavigation active="two" />
            <div className="space-y-2">
                <p className="text-2xl font-semibold text-start">Pick your topics</p>
                <p className="text-2sm text-white/70">Tell us where you're at. and we'll tailor developer tips just for you</p>
            </div>
            <div className="flex flex-wrap items-center justify-center ">
                {languages.map((lang) => (
                    <CustomPick key={lang} title={lang} onclick={() => togglePick(lang)} selected={pick.includes(lang)} />
                ))}
            </div>
        </div>
        <div className="absolute bottom-5 left-2 right-2">
            <CustomButton title="Continue" onclick={() => route.push('/home')} />
        </div>
    </div>
}