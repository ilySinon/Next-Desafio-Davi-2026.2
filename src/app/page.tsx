import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Trophy } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full flex flex-col">
        
        <section className="w-full min-h-screen bg-gradient-to-r from-[#65001A] via-[#00100C] to-[#004C23] pt-[100px] flex items-center justify-center px-12">
          <div className="max-w-7xl w-full grid grid-cols-2 gap-8 items-center">
            
            <div className="flex flex-col gap-6 text-white">
              <span className="font-inter text-sm tracking-widest uppercase">
                COLEÇÃO 2026
              </span>
              <h1 className="text-8xl leading-[0.9] text-white font-anton">
                VISTA O<br/>
                MANTO<br/>
                <span className="text-[#91E3AE]">TRICOLOR</span>
              </h1>
              <p className="font-inter text-sm text-gray-300 max-w-md">
                Camisas, moletons e acessórios oficiais do Fluminense Football Club. Do Maracanã pro seu guarda-roupa - verde, branco e grená.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href="/categorias" className="bg-[#F8F5EC] text-black font-inter text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors">
                  COMPRAR AGORA <ArrowRight size={16} />
                </Link>
                <Link href="/sobre" className="border border-[#F8F5EC] text-[#F8F5EC] font-inter text-xs font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                  NOSSA HISTÓRIA
                </Link>
              </div>
            </div>

            <div className="w-full h-[500px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 p-8 relative overflow-hidden">
              <div className="absolute bottom-6 left-6 flex flex-col text-white">
                <span className="font-inter text-xs">LOREM IPSUM DOLOR</span>
                <span className="font-inter font-bold text-lg">Produto em Destaque</span>
              </div>
              <div className="absolute bottom-6 right-6 text-2xl text-white">
                R$ 000,00
              </div>
            </div>
            
          </div>
        </section>

        <section className="w-full bg-[#F8F5EC] border-b border-gray-200 py-6 px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
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
              <div className="bg-[#e5e4de] p-3 rounded-full text-[#7a1226]">
                <ShieldCheck size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-xs text-black">Produtos oficiais</span>
                <span className="font-inter text-[10px] text-gray-500">100% licenciados pelo Fluminense FC</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#e5e4de] p-3 rounded-full text-[#7a1226]">
                <Trophy size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-inter font-bold text-xs text-black">Coleção 2026</span>
                <span className="font-inter text-[10px] text-gray-500">Manto novo, a Glória de sempre</span>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#F8F5EC] py-16 px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <h2 className=" font-anton text-6xl text-black">CATEGORIAS</h2>
              <Link href="/categorias" className="flex items-center gap-2 font-inter text-xs font-bold text-black hover:text-gray-600 transition-colors">
                Ver tudo <ArrowRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-6 gap-4 h-[300px]">
              <div className="bg-[#004e28] rounded-lg p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">01</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">CAMISAS</span>
                </div>
              </div>
              <div className="bg-[#004e28] rounded-lg p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">02</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">MANGA LONGA</span>
                </div>
              </div>
              <div className="bg-[#e5e4de] rounded-lg p-4 flex flex-col justify-between text-black transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">03</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">MOLETONS</span>
                </div>
              </div>
              <div className="bg-[#e5e4de] rounded-lg p-4 flex flex-col justify-between text-black transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">04</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">CALÇAS</span>
                </div>
              </div>
              <div className="bg-[#7a1226] rounded-lg p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">05</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">BERMUDAS</span>
                </div>
              </div>
              <div className="bg-[#7a1226] rounded-lg p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2">
                <span className="text-2xl flex justify-center">06</span>
                <div className="flex flex-col">
                  <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                  <span className="text-xl tracking-wide flex justify-center">BONÉS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f6f5ef] py-16 px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <h2 className="font-anton text-6xl text-black">NOVOS</h2>
            
            <div className="grid grid-cols-4 gap-6">
              
              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full h-[350px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105">
                  
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] text-gray-500 uppercase">LOREM IPSUM</span>
                    <span className="font-inter font-bold text-sm text-black">Nome do Produto</span>
                  </div>
                  <span className="text-lg text-black">R$ 000,00</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full h-[350px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105">
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] text-gray-500 uppercase">LOREM IPSUM</span>
                    <span className="font-inter font-bold text-sm text-black">Nome do Produto</span>
                  </div>
                  <span className="text-lg text-black">R$ 000,00</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full h-[350px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105">
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] text-gray-500 uppercase">LOREM IPSUM</span>
                    <span className="font-inter font-bold text-sm text-black">Nome do Produto</span>
                  </div>
                  <span className="text-lg text-black">R$ 000,00</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 group cursor-pointer">
                <div className="w-full h-[350px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105">
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] text-gray-500 uppercase">LOREM IPSUM</span>
                    <span className="font-inter font-bold text-sm text-black">Nome do Produto</span>
                  </div>
                  <span className="text-lg text-black">R$ 000,00</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="w-full bg-[#11131a] py-20 px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-4 text-white">
              <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">O TRICOLOR</span>
              <h2 className="font-anton text-6xl leading-tight">ORGULHO DE<br/>SER FLUMINENSE</h2>
              <p className="font-inter text-sm text-gray-300 max-w-md mt-2">
                Desde 21 de julho de 1902, o Fluminense escreve a história do futebol brasileiro. Esta loja é para quem carrega o pó de arroz no peito.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-3 border-l pl-6 bg-[#1A2231] px-8">
                <span className="font-anton text-3xl text-[#7a1226]">01</span>
                <h3 className="font-anton text-2xl text-white">MISSÃO</h3>
                <p className="font-inter text-xs text-gray-400">
                  Levar o tricolor a cada torcedor com produtos oficiais e qualidade digna do manto.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-l pl-6 bg-[#1A2231] px-8">
                <span className="font-anton text-3xl text-[#e5e4de]">02</span>
                <h3 className="font-anton text-2xl text-white">VISÃO</h3>
                <p className="font-inter text-xs text-gray-400">
                  Ser a loja referência para a torcida mais tradicional do Brasil, dentro e fora do Rio.
                </p>
              </div>
              <div className="flex flex-col gap-3 border-l pl-6 bg-[#1A2231] px-8">
                <span className="font-anton text-3xl text-[#004e28]">03</span>
                <h3 className="font-anton text-2xl text-white">VALORES</h3>
                <p className="font-inter text-xs text-gray-400">
                  Tradição, orgulho, respeito e o amor incondicional pelas cores verde, branco e grená.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}