"use client"

import CodeCard from "@/components/home/CodeCard";
import Loading from "@/components/Loading";
import { Tips } from "@/type/tips";
import { formattedDate } from "@/utils/date_format";
import axios from "axios";
import { ArrowLeftCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function TipsDetails() {
    const [loading, setLoading] = useState(false)
    const [tip, setTip] = useState<Tips | null>(null)
    const route = useRouter()
    const params = useParams()
    const id = params.id as string;

    if (!id) {
        route.back()
    }

    useEffect(() => {

        const fetchTips = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`/api/tips/${id}`)
                const data = res.data
                if (!data.success) throw new Error("Failed to fetch tips")

                setTip(data.data)
            } catch (err) {
                console.error(err)
                toast.error("Failed to get tips")
                route.back()
            }
            setLoading(false)
        }

        fetchTips()
    }, [])

    return <div className="space-y-8">
        {loading ? <Loading /> : tip && <>
            <div className="flex gap-2 items-center">
                <ArrowLeftCircle onClick={() => route.back()} />
                <p className="text-xl">{formattedDate(tip.created_at)}</p>
            </div>

            <div className="space-y-3">
                <p className="text-3xl font-semibold">{tip.title}</p>
                <p className="border border-lime-400 px-4 py-1 rounded-full w-fit">{tip.language}</p>
            </div>

            <div className="space-y-6">
                <CodeCard
                    lang={tip.language}
                    topText={tip.topContent}
                    codeText={tip.code}
                    bottomText={tip.bottomContent}
                />
            </div></>}
    </div>
}