import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardNormal } from "../../../../components/Cards";
import HeroSectionCategoria from "../../../../components/CategoriasComponentes/HeroSectionCategorias";
import BotoesCategorias from "../../../../components/CategoriasComponentes/BotoesCategorias";

export default async function PaginaCategoria({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;

  return (
    <main className="w-full flex flex-col bg-(--var-Creme) min-h-screen">
      <HeroSectionCategoria 
        titulo={categoria} 
        descricao={`Explore a nossa coleção de ${categoria} oficiais.`} 
      />

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <BotoesCategorias categoriaAtiva={categoria} />

        <h2 className="font-anton text-4xl lg:text-5xl text-black mb-8 uppercase">
          {categoria}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <CardNormal 
            nome="Camisa III 2026" 
            preco="R$ 349,90" 
            categoria="MANTO SAGRADO" 
            imagem="/basicas/Teste.png" 
            href="/produto/1" 
          />
          <CardNormal 
            nome="Camisa III 2026" 
            preco="R$ 349,90" 
            categoria="MANTO SAGRADO" 
            imagem="/basicas/Teste.png" 
            href="/produto/2" 
          />
          <CardNormal 
            nome="Camisa III 2026" 
            preco="R$ 349,90" 
            categoria="MANTO SAGRADO" 
            imagem="/basicas/Teste.png" 
            href="/produto/3" 
          />
          <CardNormal 
            nome="Camisa III 2026" 
            preco="R$ 349,90" 
            categoria="MANTO SAGRADO" 
            imagem="/basicas/Teste.png" 
            href="/produto/4" 
          />
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