import React from "react";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function CustomCard({ icon, title, description }: CardProps) {
    return <div className="flex gap-6 justify-center items-center">
        <div className="text-lime-400 p-4 border border-lime-100/20 rounded-full">
            {icon}
        </div>
        <div className="space-y-2">
            <p className="text-semibold text-lg">{title}</p>
            <p className="text-sm text-white/70">{description}</p>
        </div>
    </div>
}