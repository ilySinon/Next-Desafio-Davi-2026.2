import { Search } from "lucide-react";

export default function Pesquisar() {
  return (
    <form className="absolute top-[100px] left-0 w-full px-6 lg:px-12 bg-transparent shadow-lg" autoComplete="off">
      <div className="flex w-full flex-col items-center pb-6">
        <div className="relative flex w-full items-center">
          <Search className="w-7 h-7 absolute text-white/50 left-4" />
          <input
            id="search"
            name="search"
            type="text"
            className="w-full rounded-xl px-16 py-6 text-white bg-zinc-900 focus:bg-zinc-800 hover:bg-zinc-800 outline-none caret-white transition-all duration-300"
            placeholder="Faça sua busca!"
          />
        </div>
      </div>
    </form>
  );
}