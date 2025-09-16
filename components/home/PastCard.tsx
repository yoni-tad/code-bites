import { Heart, Send } from "lucide-react";

interface CardProps {
    date: string;
    title: string;
    language: string
}

export default function PastCard({ date, title, language }: CardProps) {
    return <div className="space-y-2">
        <div className="">
            <p className="text-xs">{date}</p>
            <p className="text-lg font-bold">{title}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="border border-lime-400 px-4 py-1 rounded-full text-sm w-fit">{language}</p>
            <div className="flex gap-2">
                <div className="border border-white/10 rounded-full p-2">
                    <Send size={18} />
                </div>
                <div className="border border-white/10 rounded-full p-2">
                    <Heart size={18} />
                </div>
            </div>
        </div>
    </div>
}