import PastCard from "@/components/home/PastCard";
import SearchBar from "@/components/home/SearchBar";

export default function PastTips() {
    return <div className="space-y-6">
        <SearchBar />
        <div className="bg-white/10 p-4 rounded-2xl">
            <PastCard title="Use FlatList instead of ScrollView for long lists to optimize performance" language="React Native" date="Sep 16, 2025"/>
            <div className="my-4 h-[1] bg-white/40 rounded-full mx-2"></div>
            <PastCard title="Use FlatList instead of ScrollView for long lists to optimize performance" language="React Native" date="Sep 16, 2025"/>
        </div>
    </div>
}