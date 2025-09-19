"use client"

import CustomButton from "@/components/onboarding/CustomButton";
import CustomNavigation from "@/components/onboarding/CustomNavigation";
import CustomRadio from "@/components/onboarding/CustomRadio";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StepOne() {
    const [selected, setSelected] = useState(0)
    const route = useRouter()

    return <div className="flex flex-col h-screen">
        <div className="flex-1 space-y-6">
            <CustomNavigation active="one" />
            <div className="space-y-2">
                <p className="text-2xl font-semibold text-start">Select your developer experience level</p>
                <p className="text-2sm text-white/70">Tell us where you're at. and we'll tailor developer tips just for you</p>
            </div>
            <div className="space-y-4">
                <CustomRadio title="Beginner" description="Just starting - when the concept of 'undefined' is still a mystery" active={selected == 0} onClick={() => setSelected(0)} />
                <CustomRadio title="Intermediate" description="Leveling up (and maybe pretending to writing comments)" active={selected == 1} onClick={() => setSelected(1)} />
                <CustomRadio title="Experienced" description="Advance tips for those who've seen code.. lot of code" active={selected == 2} onClick={() => setSelected(2)} />
            </div>
        </div>
        <div className="absolute bottom-5 left-2 right-2">
            <CustomButton title="Continue" onclick={() => route.push('/onboarding/two')} />
        </div>
    </div>
}