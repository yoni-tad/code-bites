"use client"

import PastCard from "@/components/home/PastCard";
import SearchBar from "@/components/home/SearchBar";
import Loading from "@/components/Loading";
import { Tips } from "@/type/tips";
import { formattedDate } from "@/utils/date_format";
import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PastTips() {
    const [loading, setLoading] = useState(false)
    const [tips, setTips] = useState<Tips[]>([])

    useEffect(() => {
        const fetchTips = async () => {
            setLoading(true)
            try {
                const res = await axios.get("/api/tips")
                const data = res.data
                if (!data.success) throw new Error("Failed to fetch tips")

                setTips(data.data)
            } catch (err) {
                console.error(err)
                toast.error("Failed to get tips")
            }
            setLoading(false)
        }

        fetchTips()
    }, [])

    return <div className="space-y-6">
        <div className="flex gap-2 items-center">
            <SearchBar />
            <Heart size={28}/>
        </div>
        {loading ? <Loading /> :
            <div className="bg-white/10 p-4 rounded-2xl">
                {tips && tips.map((tip, index) => (
                    <div key={index}>
                        <PastCard id={tip.id} title={tip.title} language={tip.language} date={formattedDate(tip.created_at)} />
                        <div className="my-4 h-[1] bg-white/40 rounded-full mx-2"></div>
                    </div>
                ))}
            </div>
        }
    </div>
}