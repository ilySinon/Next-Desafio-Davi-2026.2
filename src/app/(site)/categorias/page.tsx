import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardNormal } from "../../../components/Cards";
import HeroSectionCategoria from "../../../components/CategoriasComponentes/HeroSectionCategorias";
import BotoesCategorias from "../../../components/CategoriasComponentes/BotoesCategorias";
import { TituloCategoria } from "../../../components/CategoriasComponentes/TituloCategoria";

export default function CategoriasGeral() {
  return (
    <main className="w-full flex flex-col bg-(--var-Creme) min-h-screen">
      <HeroSectionCategoria 
        titulo="TODA A COLEÇÃO" 
        descricao="Explore todos os nossos mantos, moletons, calças e acessórios oficiais da Nação Tricolor." 
      />

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <BotoesCategorias categoriaAtiva="todas" />

        <TituloCategoria texto="TODOS OS PRODUTOS" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <CardNormal nome="Camisa III 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" imagem="/basicas/Teste.png" href="/produto/1" />
          <CardNormal nome="Moletom Viagem 2026" preco="R$ 499,90" categoria="MOLETONS" imagem="/basicas/Teste.png" href="/produto/2" />
          <CardNormal nome="Calça Treino 2026" preco="R$ 299,90" categoria="CALÇAS" imagem="/basicas/Teste.png" href="/produto/3" />
          <CardNormal nome="Camisa Goleiro 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" imagem="/basicas/Teste.png" href="/produto/4" />
          <CardNormal nome="Boné Aba Reta" preco="R$ 149,90" categoria="BONÉS" imagem="/basicas/Teste.png" href="/produto/5" />
          <CardNormal nome="Camisa Manga Longa" preco="R$ 379,90" categoria="MANGA LONGA" imagem="/basicas/Teste.png" href="/produto/6" />
          <CardNormal nome="Bermuda Viagem" preco="R$ 249,90" categoria="BERMUDAS" imagem="/basicas/Teste.png" href="/produto/7" />
          <CardNormal nome="Camisa I 2026" preco="R$ 349,90" categoria="MANTO SAGRADO" imagem="/basicas/Teste.png" href="/produto/8" />
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