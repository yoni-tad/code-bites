"use client"

import { CopyBlock, dracula } from "react-code-blocks";

interface CardProps {
    lang?: string;
    topText?: string;
    codeText?: string;
    bottomText?: string;
}

export default function CodeCard({ lang = '', topText, codeText = '', bottomText }: CardProps) {
    return <div className="bg-white/10 p-4 rounded-xl space-y-4">
        <p>{topText}</p>
        <div className="overflow-x-hidden rounded-2xl">
            {codeText && <CopyBlock text={codeText} language={lang} theme={dracula} copied={true} />}
        </div>
        <p>{bottomText}</p>
    </div>
}