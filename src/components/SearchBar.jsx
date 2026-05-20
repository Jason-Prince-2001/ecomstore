import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full max-w-md">
      
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-11 pr-4 py-2.5 rounded-full border border-gray-300 
                   bg-white shadow-sm outline-none 
                   focus:ring-2 focus:ring-black focus:border-black transition"
      />
    </div>
  );
}

export default SearchBar;