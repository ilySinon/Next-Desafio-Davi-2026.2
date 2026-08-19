'use client'

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Pesquisar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '');

  const handleSearch = (query: string) => {
    if(!query) {
      return;
    }

    const params = new URLSearchParams();
    params.set('query', query);
    router.push(`/pesquisar?${params.toString()}`);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSubmit} className="absolute top-25 left-0 w-full px-6 lg:px-12 bg-transparent shadow-lg" autoComplete="off">
      <div className="flex w-full flex-col items-center pb-6">
        <div className="relative flex w-full items-center">
          <Search className="w-7 h-7 absolute text-white/50 left-4" />
          <input
            id="search"
            name="search"
            type="text"
            className="w-full rounded-xl px-16 py-6 text-white bg-zinc-900 focus:bg-zinc-800 hover:bg-zinc-800 outline-none caret-white transition-all duration-300"
            placeholder="Faça sua busca!"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}