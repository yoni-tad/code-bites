import Image from "next/image";
import smilePNG from "./../public/smile.png"

interface ErrorProps {
    title: string;
    btnText: string;
    btnAction: () => void;
}

export default function ErrorWidget({title, btnText, btnAction}: ErrorProps) {
    return <div className="flex flex-col justify-center items-center h-screen gap-4">
        <Image src={smilePNG} alt="Error" height={80}/>
        <p className="text-xl font-bold">{title}</p>
        <button onClick={btnAction} className="bg-black/20 rounded-full py-4 w-full">{btnText}</button>
    </div>
}