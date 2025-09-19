"use client"

import Error from "@/components/Error";
import CodeCard from "@/components/home/CodeCard";
import Feedback from "@/components/home/Feedback";
import Loading from "@/components/Loading";
import { Tips } from "@/type/tips";
import { formattedDate } from "@/utils/date_format";
import axios from "axios";
import { HeartPlus, Send } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState<Tips | null>(null)

  const fetchTip = async () => {
    setLoading(true)
    try {
      const res = await axios.get("/api/tips/today")
      const data = res.data
      if (!data.success) throw new Error("Failed to fetch tip")

      setTip(data.data)
    } catch (err) {
      console.error(err)
      toast.error("Failed to get tip")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTip()
  }, [])

  console.log(tip)

  return <>{loading ? <Loading /> : tip ? <div className="space-y-8">
    <div className="flex justify-between items-center">
      <div className="space-y-1">
        <p className="text-xl">Today's Tip</p>
        <p className="text-xs text-white/80">{formattedDate(tip.created_at)}</p>
      </div>
      <div className="flex gap-2">
        <div className="bg-white/10 rounded-full p-2">
          <Send size={18} />
        </div>
        <div className="bg-white/10 rounded-full p-2">
          <HeartPlus size={18} />
        </div>
      </div>
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

      <Feedback />
    </div>
  </div> : <Error title="Failed to get today tip" btnText="Try again" btnAction={() => fetchTip()} />

  }</>
}