import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import CardProduto from "../../../components/CardProduto";

export default function Categorias() {
  return (
    <main className="w-full flex flex-col bg-[#F8F5EC] min-h-screen">
      <section className="w-full bg-gradient-to-r from-[#65001A] via-[#00100C] to-[#004C23] pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
        <span className="text-white/80 font-inter text-xs tracking-widest uppercase mb-4">COLEÇÃO</span>
        <h1 className="text-5xl lg:text-7xl text-white font-anton mb-4 uppercase">CAMISAS</h1>
        <p className="text-gray-300 font-inter text-sm max-w-md mb-8">
          Manto sagrado, casa, fora e edições especiais.
        </p>
        <Link href="/" className="bg-white text-black font-inter text-xs font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          <ArrowLeft size={16} /> VER TODAS AS CATEGORIAS
        </Link>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mb-12">
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">TODAS</button>
          <button className="px-6 py-2 rounded-full border border-[#7a1226] bg-[#7a1226] text-white font-inter text-[10px] font-bold uppercase transition-colors">CAMISAS</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">MANGA LONGA</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">MOLETONS</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">CALÇAS</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">BERMUDAS</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 bg-white text-black font-inter text-[10px] font-bold uppercase transition-colors hover:bg-gray-100">BONÉS</button>
        </div>

        <h2 className="font-anton text-4xl lg:text-5xl text-black mb-8 uppercase">CAMISAS</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Link href="/categorias/exemplo" className="contents">
            <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          </Link>
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
          <CardProduto nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" />
        </div>

        <div className="flex items-center justify-center gap-4 mt-16">
          <button className="p-1 text-black hover:text-gray-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <span className="font-anton text-xl text-black">1</span>
          <button className="p-1 text-black hover:text-gray-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </main>
  );
}