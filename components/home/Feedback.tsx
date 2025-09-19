"use client"

import axios from "axios";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Sheet } from "react-modal-sheet";

export default function Feedback() {
    const [isOpen, setOpen] = useState(false);
    const [reason, setReason] = useState<string>()
    const reasons = ["Its outdated like my old codebase", "Not relevant to me for anyone, really", "Too simple, I need more", "Whoa, too advanced for today", "Something else"]

    const saveFeedback = (reaction: string) => {
        const fetch = async () => {
            try {
                const res = await axios.post("/api/feedback", {
                    "user_id": 3,
                    "tip_id": 1,
                    reaction,
                    reason
                })
                const data = res.data
                if (!data.success) throw new Error("Failed to fetch tips")
            } catch (err) {
                console.error(err)
                throw err
            }
        }

        toast.promise(
            fetch, {
            loading: "Loading...",
            success: "Thank you for your feedback",
            error: "Fail to save your feedback"
        })
    }



    return <div className="flex justify-between items-center gap-2">
        <div className="bg-white py-2 rounded-2xl flex flex-col justify-center items-center w-full" onClick={() => setOpen(true)}>
            <p className="text-2xl">😡</p>
            <p className="text-black text-sm font-semibold">Hate it</p>
        </div>
        <div className="bg-white py-2 rounded-2xl flex flex-col justify-center items-center w-full" onClick={() => {saveFeedback("Love")}}>
            <p className="text-2xl">😍</p>
            <p className="text-black text-sm font-semibold">Love it</p>
        </div>
        <div className="bg-white py-2 rounded-2xl flex flex-col justify-center items-center w-full" onClick={() => {saveFeedback("Share")}}>
            <p className="text-2xl">😎</p>
            <p className="text-black text-sm font-semibold">Share it</p>
        </div>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[0, 0.4, 0.5, 1]} initialSnap={2} >
            <Sheet.Container className="p-4" style={{ backgroundColor: "black" }}>
                <Sheet.Header className="flex justify-between items-center">
                    <p className="text-xl font-semibold">What went wrong with this tip?</p>
                    <div className="p-1 bg-black/20 rounded-lg" onClick={() => setOpen(false)}>
                        <X />
                    </div>
                </Sheet.Header>
                <Sheet.Content>
                    <div className="space-y-4">
                        <div className="bg-neutral-900 p-4 rounded-4xl text-center mx-4 my-6">
                            {reasons.map((element, index) => (
                                <div key={index}>
                                    <p onClick={() => setReason(element)} className={`text-lg ${reason == element ? 'text-lime-400' : 'text-white'}`}>{element}</p>
                                    <div className="h-[1px] bg-white/20 my-2"></div>
                                </div>
                            ))}
                        </div>
                        <button className={`w-full py-4 rounded-full text-lg text-black ${reason ? 'bg-white' : 'bg-white/60'}`} onClick={() => { reason && saveFeedback("Hate"); setOpen(false); }}>Complete</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop onTap={() => setOpen(false)} />
        </Sheet>
    </div>
}