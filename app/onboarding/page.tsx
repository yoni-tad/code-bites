import CustomButton from "@/components/onboarding/CustomButton";
import CustomCard from "@/components/onboarding/CustomCard";
import Link from "next/link";

export default function onBoarding() {
    return <div className="flex flex-col h-screen py-8 px-4">
        <div className="flex-1 my-4">
            <p className="text-2xl font-bold text-center">Welcome to Code Bites Daily</p>
            <div className="my-12 space-y-8">
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </div>
        <Link href="/onboarding/one">
            <CustomButton title="Continue" onclick={() => {}}/>
        </Link>
    </div>
}