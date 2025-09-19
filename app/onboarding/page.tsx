"use client"

import CustomButton from "@/components/onboarding/CustomButton";
import CustomCard from "@/components/onboarding/CustomCard";
import { CalendarFold, ChartScatter, UserStar } from "lucide-react";
import { useRouter } from "next/navigation";

export default function onBoarding() {
    const route = useRouter()

    return <div className="flex flex-col h-screen py-8 px-4">
        <div className="flex-1 my-4">
            <p className="text-2xl font-bold text-center">Welcome to Code Bites Daily</p>
            <div className="my-12 space-y-8">
                <CustomCard icon={<ChartScatter />} title="Tips Based on Your Experience" description="Get tips that actually help (because Google can't solve it all)" />
                <CustomCard icon={<UserStar />} title="Personalize your content" description="Pick your languages and frameworks - or just add them all, we won't judge!" />
                <CustomCard icon={<CalendarFold />} title="Your Daily Dose" description="One tip a day - just enough to level up without frying your brain!" />
            </div>
        </div>
        <CustomButton title="Continue" onclick={() => route.push("/onboarding/one")} />
    </div>
}