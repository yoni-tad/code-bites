import React, { ReactNode } from "react";

type BackProps = {
    children: ReactNode
}

export default function Background({ children }: BackProps) {
    return <div className="bg-gradient-to-b from-zinc-900 to-lime-950 flex justify-center items-center">
        {children}
    </div>
}