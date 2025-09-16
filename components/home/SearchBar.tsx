import { Search } from "lucide-react";

export default function SearchBar() {
    return <div className="bg-white/10 rounded-full py-2 px-3 flex gap-3 items-center">
        <Search />
        <p className="text-lg">Find....</p>
    </div>
}