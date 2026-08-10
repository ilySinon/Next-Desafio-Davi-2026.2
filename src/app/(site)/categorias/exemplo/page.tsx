import Link from "next/link";
import { ArrowLeft, ShoppingBag, Truck, ShieldCheck } from "lucide-react";

export default function ProdutoExemplo() {
  return (
    <>
      <main className="w-full flex flex-col bg-[#F8F5EC] min-h-screen pt-[120px] lg:pt-[160px] pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="flex lg:hidden w-full mb-6">
            <Link href="/categorias" className="flex items-center gap-2 font-inter text-xs font-bold text-black uppercase hover:text-gray-600 transition-colors">
              <ArrowLeft size={16} /> VOLTAR
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="w-full aspect-[3/4] bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden">
              </div>
              <div className="flex gap-4">
                <div className="w-20 lg:w-24 aspect-square bg-gray-800 rounded-xl border-2 border-black cursor-pointer overflow-hidden">
                </div>
                <div className="w-20 lg:w-24 aspect-square bg-gray-800 rounded-xl border border-gray-300 cursor-pointer overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                </div>
                <div className="w-20 lg:w-24 aspect-square bg-gray-800 rounded-xl border border-gray-300 cursor-pointer overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              
              <div className="hidden lg:flex w-full justify-between items-center mb-6">
                <span className="font-inter text-xs text-gray-500 uppercase tracking-widest">
                  MANTO SAGRADO
                </span>
                <Link href="/categorias" className="flex items-center gap-2 font-inter text-xs font-bold text-black uppercase hover:text-gray-600 transition-colors">
                  VOLTAR <ArrowLeft size={16} />
                </Link>
              </div>

              <span className="lg:hidden font-inter text-xs text-gray-500 uppercase tracking-widest mb-2">
                MANTO SAGRADO
              </span>

              <h1 className="font-anton text-5xl lg:text-6xl text-black uppercase leading-[1.1]">
                CAMISA III 2026
              </h1>
              
              <span className="font-anton text-3xl lg:text-4xl text-black mt-4 lg:mt-6">
                R$ 349,90
              </span>

              <p className="font-inter text-sm lg:text-base text-gray-500 mt-4 lg:mt-6 max-w-lg">
                Mais do que um uniforme, é uma camisa sagrada que protege e impulsiona jogadores e torcida, exaltando a fé inabalável da torcida. Cada detalhe carrega o sentimento tricolor, mostrando que vai além da paixão: é devoção.
              </p>

              <div className="flex flex-col gap-3 mt-8 lg:mt-10">
                <span className="font-inter text-xs font-bold text-black uppercase">TAMANHO</span>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center font-inter text-xs font-bold text-black hover:border-black transition-colors">PP</button>
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center font-inter text-xs font-bold text-black hover:border-black transition-colors">P</button>
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-black bg-gray-100 flex items-center justify-center font-inter text-xs font-bold text-black transition-colors">M</button>
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center font-inter text-xs font-bold text-black hover:border-black transition-colors">G</button>
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center font-inter text-xs font-bold text-black hover:border-black transition-colors">GG</button>
                  <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-gray-300 flex items-center justify-center font-inter text-xs font-bold text-black hover:border-black transition-colors">XG</button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 mt-10">
                <button className="flex-1 bg-[#7a1226] text-white font-inter text-xs font-bold px-6 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-[#5a0d1c] transition-colors">
                  <ShoppingBag size={18} /> ADICIONAR AO CARRINHO
                </button>
                <button className="flex-1 lg:flex-none border border-black text-black font-inter text-xs font-bold px-8 py-4 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  COMPRAR AGORA
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="bg-[#e5e4de] p-3 rounded-full text-[#7a1226]">
                    <Truck size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-inter font-bold text-xs text-black">Frete grátis</span>
                    <span className="font-inter text-[10px] text-gray-500">Acima de R$ 299 para todo o Brasil</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#e5e4de] p-3 rounded-full text-[#004C23]">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-inter font-bold text-xs text-black">Produtos oficiais</span>
                    <span className="font-inter text-[10px] text-gray-500">100% licenciados pelo Fluminense FC</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}