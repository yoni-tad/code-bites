"use client"

import { Bell, BellRing, ClosedCaptionIcon, Cookie, Eye, Gem, Trash, User, User2, X } from "lucide-react";
import { useState } from "react";
import { Sheet } from "react-modal-sheet";

export default function Settings() {
    const [isOpen, setOpen] = useState(false);

    return <div className="space-y-6">
        <p className="text-xl font-bold">Settings</p>
        <div className="flex items-center gap-4 bg-white/10 rounded-4xl py-2 px-6 -mt-2">
            <Gem className="text-lime-400" size={56} />
            <p className="text-md font-medium">Soft Skills the hidden power-up for developers. Keep them on - you'll thank us later!</p>
        </div>
        <div className="flex flex-col gap-2 bg-white/10 p-4 rounded-2xl">
            <div className="flex gap-4">
                <User2 />
                <p className="text-lg font-medium">My topics</p>
            </div>
            <div className="bg-white/20 h-[1] w-full rounded-full my-1.5"></div>
            <div className="flex gap-4">
                <BellRing />
                <p className="text-lg font-medium">Notifications</p>
            </div>
            <div className="bg-white/20 h-[1] w-full rounded-full my-1.5"></div>
            <div className="flex gap-4">
                <Eye />
                <p className="text-lg font-medium">Appearance</p>
            </div>
            <div className="bg-white/20 h-[1] w-full rounded-full my-1.5"></div>
            <div className="flex gap-4">
                <Cookie />
                <p className="text-lg font-medium">Privacy Policy</p>
            </div>
            <div className="bg-white/20 h-[1] w-full rounded-full my-1.5"></div>
            <div className="flex gap-4" onClick={() => setOpen(true)}>
                <Trash />
                <p className="text-lg font-medium">Delete my data</p>
            </div>
        </div>

        <Sheet isOpen={isOpen} onClose={() => setOpen(false)} snapPoints={[0, 0.35, 0.5, 1]} initialSnap={1} >
            <Sheet.Container className="p-4" style={{ backgroundColor: "black" }}>
                <Sheet.Header className="flex justify-between items-center">
                    <p className="text-xl font-semibold">Delete my data?</p>
                    <div className="p-1 bg-black/20 rounded-lg" onClick={() => setOpen(false)}>
                        <X />
                    </div>
                </Sheet.Header>
                <Sheet.Content>
                    <div className="space-y-4">
                        <p className="text-center py-4 text-md font-medium">some description here</p>
                        <button className="bg-red-400 w-full py-4 rounded-full text-lg">Yes, delete it</button>
                        <button className="bg-white/20 w-full py-4 rounded-full text-lg text-white" onClick={() => setOpen(false)}>Nope, change my mind</button>
                    </div>
                </Sheet.Content>
            </Sheet.Container>

            <Sheet.Backdrop onTap={() => setOpen(false)} />
        </Sheet>
    </div>
}