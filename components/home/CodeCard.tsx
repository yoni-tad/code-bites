"use client"

import { CopyBlock, dracula } from "react-code-blocks";

interface CardProps {
    topText?: string;
    codeText?: string;
    bottomText?: string;
}

export default function CodeCard({ topText, codeText = '', bottomText }: CardProps) {
    return <div className="bg-white/10 p-4 rounded-xl space-y-4">
        <p>{topText}</p>
        <div className="overflow-x-hidden rounded-2xl">
            <CopyBlock text={codeText} language="javascript" theme={dracula} />
        </div>
        <p>{bottomText}</p>
    </div>
}