import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Trophy } from "lucide-react";
import CardProduto from "../../components/CardProduto";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col">
        <section className="w-full min-h-screen bg-gradient-to-r from-[#65001A] via-[#00100C] to-[#004C23] pt-[120px] lg:pt-[100px] flex items-center justify-center px-6 lg:px-12 pb-12 lg:pb-0">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white text-center lg:text-left items-center lg:items-start">
              <span className="font-inter text-sm tracking-widest uppercase">
                COLEÇÃO 2026
              </span>
              <h1 className="text-6xl lg:text-8xl leading-[0.9] text-white font-anton">
                VISTA O<br />
                MANTO<br />
                <span className="text-[#91E3AE]">TRICOLOR</span>
              </h1>
              <p className="font-inter text-sm text-gray-300 max-w-md">
                Camisas, moletons e acessórios oficiais do Fluminense Football Club. Do Maracanã pro seu guarda-roupa - verde, branco e grená.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full lg:w-auto">
                <Link href="/categorias" className="bg-[#F8F5EC] text-black font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                  COMPRAR AGORA <ArrowRight size={16} />
                </Link>
                <Link href="/sobre" className="border border-[#F8F5EC] text-[#F8F5EC] font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                  NOSSA HISTÓRIA
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-[350px] lg:h-[500px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 p-8 relative overflow-hidden">
              <div className="absolute bottom-6 left-6 flex flex-col text-white">
                <span className="font-inter text-xs uppercase">Lorem Ipsum Dolor</span>
                <span className="font-inter font-bold text-lg">Produto em Destaque</span>
              </div>
              <div className="absolute bottom-6 right-6 text-xl lg:text-2xl text-white">
                R$ 000,00
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#F8F5EC] border-b border-gray-200 py-8 lg:py-6 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start lg:items-center">
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

        <section className="w-full bg-[#F8F5EC] py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 lg:gap-0">
              <h2 className="font-anton text-5xl lg:text-6xl text-black">CATEGORIAS</h2>
              <Link href="/categorias" className="flex items-center gap-2 font-inter text-xs font-bold text-black hover:text-gray-600 transition-colors">
                Ver tudo <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#004e28] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">01</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center">CAMISAS</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#004e28] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">02</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center text-center lg:text-left">MANGA LONGA</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#e5e4de] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-black transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">03</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center">MOLETONS</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#e5e4de] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-black transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">04</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center">CALÇAS</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#7a1226] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">05</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center">BERMUDAS</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/6 p-2">
                <div className="bg-[#7a1226] rounded-lg p-6 lg:p-4 flex flex-col justify-between text-white transition-transform hover:-translate-y-2 h-[150px] lg:h-[300px]">
                  <span className="text-2xl flex justify-center">06</span>
                  <div className="flex flex-col">
                    <span className="font-inter text-[10px] uppercase flex justify-center">Coleção</span>
                    <span className="text-xl tracking-wide flex justify-center">BONÉS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#f6f5ef] py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <h2 className="font-anton text-5xl lg:text-6xl text-black">NOVOS</h2>

            <div className="flex flex-wrap -m-2 lg:-m-3">
              <div className="w-1/2 lg:w-1/4 p-2 lg:p-3">
                <CardProduto nome="Camisa Tricolor Oficial" preco="R$ 349,90" categoria="CAMISAS" />
              </div>
              <div className="w-1/2 lg:w-1/4 p-2 lg:p-3">
                <CardProduto nome="Camisa Tricolor Oficial" preco="R$ 349,90" categoria="CAMISAS" />
              </div>
              <div className="w-1/2 lg:w-1/4 p-2 lg:p-3">
                <CardProduto nome="Camisa Tricolor Oficial" preco="R$ 349,90" categoria="CAMISAS" />
              </div>
              <div className="w-1/2 lg:w-1/4 p-2 lg:p-3">
                <CardProduto nome="Camisa Tricolor Oficial" preco="R$ 349,90" categoria="CAMISAS" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#11131a] py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white text-center lg:text-left items-center lg:items-start">
              <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">O TRICOLOR</span>
              <h2 className="font-anton text-5xl lg:text-6xl leading-tight">ORGULHO DE<br />SER FLUMINENSE</h2>
              <p className="font-inter text-sm text-gray-300 max-w-md mt-2">
                Desde 21 de julho de 1902, o Fluminense escreve a história do futebol brasileiro. Esta loja é para quem carrega o pó de arroz no peito.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 mt-6 lg:mt-4">
              <div className="w-full lg:w-1/3 flex flex-col gap-3 border-l-4 lg:border-l-2 border-[#7a1226] pl-6 bg-[#1A2231] px-8 py-8 lg:py-6">
                <span className="font-anton text-3xl text-[#7a1226]">01</span>
                <h3 className="font-anton text-2xl text-white">MISSÃO</h3>
                <p className="font-inter text-xs text-gray-400">
                  Levar o tricolor a cada torcedor com produtos oficiais e qualidade digna do manto.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-3 border-l-4 lg:border-l-2 border-[#e5e4de] pl-6 bg-[#1A2231] px-8 py-8 lg:py-6">
                <span className="font-anton text-3xl text-[#e5e4de]">02</span>
                <h3 className="font-anton text-2xl text-white">VISÃO</h3>
                <p className="font-inter text-xs text-gray-400">
                  Ser a loja referência para a torcida mais tradicional do Brasil, dentro e fora do Rio.
                </p>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col gap-3 border-l-4 lg:border-l-2 border-[#004e28] pl-6 bg-[#1A2231] px-8 py-8 lg:py-6">
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
    </>
  );
}