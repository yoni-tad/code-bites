import { ChartScatter } from "lucide-react";

export default function CustomCard() {
    return <div className="flex gap-6 justify-center items-center">
        <div className="text-lime-400 p-4 border border-lime-100/20 rounded-full">
            <ChartScatter />
        </div>
        <div className="space-y-2">
            <p className="text-semibold text-lg">Tips Based on Your Experience</p>
            <p className="text-sm text-white/70">Get tips that actually help (because Google can't solve it all)</p>
        </div>
    </div>
}