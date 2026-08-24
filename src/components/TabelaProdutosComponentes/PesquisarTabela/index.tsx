'use client'

import { Search } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function PesquisaTabela() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('query') || '');

  const handleSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    
    params.set('page', '1');
    
    router.push(`${pathname}?${params.toString()}`);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-6" autoComplete="off">
      <div className="relative flex w-full items-center">
        <button 
          type="submit" 
          className="absolute left-4 p-1 z-10 text-gray-400 hover:text-black transition-colors cursor-pointer flex items-center justify-center"
        >
          <Search className="w-5 h-5" />
        </button>
        <input
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          className="w-full rounded-xl pl-12 pr-4 py-3 text-black bg-white border border-gray-200 focus:border-[#7A1B29] focus:ring-1 focus:ring-[#7A1B29] outline-none transition-all duration-300 shadow-sm font-inter text-sm"
          placeholder="Buscar produtos..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}