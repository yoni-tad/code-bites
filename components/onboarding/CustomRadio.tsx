import { Circle, CircleCheck } from "lucide-react";

interface RadioComponents {
    title: String;
    description: String;
    active?: boolean;
    onClick?: () => void;
}

export default function CustomRadio({ title, description, active, onClick }: RadioComponents) {
    return <div className={`bg-white/10 rounded-3xl p-4 space-y-2 ${active ? 'border border-lime-400' : ''}`} onClick={onClick}>
        <div className="flex justify-between items-center">
            <p className="text-xl">{title}</p>
            {active ? <CircleCheck size={24} className="text-lime-400" /> : <Circle size={24} className="text-white/60" />}
        </div>
        <p className="text-sm text-white/60">{description}</p>
    </div>
}