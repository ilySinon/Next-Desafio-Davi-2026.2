import HeroSectionCategoria from "../../../../components/CategoriasComponentes/HeroSectionCategorias";
import BotoesCategorias from "../../../../components/CategoriasComponentes/BotoesCategorias";
import { TituloCategoria } from "../../../../components/CategoriasComponentes/TituloCategoria";
import { CardsCategorias } from "../../../../components/CategoriasComponentes/CardsCategorias";
import getProdutosCategoria from "../../../../../actions/categorias/actions";

export default async function PaginaCategoria({ 
  params,
  searchParams,
}: { 
  params: Promise<{ categoria: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { categoria } = await params;
  const p = await searchParams;
  const currentPage = Number(p?.page) || 1;

  const categoriaFormatadaDisplay = categoria.replace(/-/g, " ");

  const { produtos, totalPages } = await getProdutosCategoria(categoria, currentPage);

  return (
    <main className="w-full flex flex-col bg-(--var-Creme) min-h-screen">
      <HeroSectionCategoria 
        titulo={categoriaFormatadaDisplay.toUpperCase()} 
        descricao={`Explore a nossa coleção de ${categoriaFormatadaDisplay} oficiais.`} 
      />

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <BotoesCategorias categoriaAtiva={categoria} />

        <TituloCategoria texto={categoriaFormatadaDisplay.toUpperCase()} />

        <CardsCategorias 
          produtos={produtos} 
          titulo={categoriaFormatadaDisplay} 
          totalPages={totalPages} 
        />
      </section>
    </main>
  );
}