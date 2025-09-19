"use client"

import { BounceLoader, DotLoader, HashLoader } from "react-spinners"

export default function Loading() {
    return <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center gap-8">
        <HashLoader color="#fff" />
        <p >Please wait...</p>
    </div>
}