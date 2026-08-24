import HeroSectionCategoria from "../../../components/CategoriasComponentes/HeroSectionCategorias";
import BotoesCategorias from "../../../components/CategoriasComponentes/BotoesCategorias";
import { TituloCategoria } from "../../../components/CategoriasComponentes/TituloCategoria";
import { CardsCategorias } from "../../../components/CategoriasComponentes/CardsCategorias";
import getProdutosCategoria from "../../../../actions/categorias/actions";

export default async function CategoriasGeral({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const { produtos, totalPages } = await getProdutosCategoria("todas", currentPage);

  return (
    <main className="w-full flex flex-col bg-(--var-Creme) min-h-screen">
      <HeroSectionCategoria 
        titulo="TODA A COLEÇÃO" 
        descricao="Explore todos os nossos mantos, moletons, calças e acessórios oficiais da Nação Tricolor." 
      />

      <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-12">
        <BotoesCategorias categoriaAtiva="todas" />
        <TituloCategoria texto="TODOS OS PRODUTOS" />
        <CardsCategorias 
          produtos={produtos} 
          titulo="TODAS" 
          totalPages={totalPages} 
        />
      </section>
    </main>
  );
}