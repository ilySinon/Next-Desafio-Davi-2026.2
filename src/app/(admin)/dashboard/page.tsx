import { TituloProdutos } from "../../../components/TabelaProdutosComponentes/TituloProdutos";
import { TabelaProdutos } from "../../../components/TabelaProdutosComponentes/TabelaProdutos";
import getProdutosTabela from "@/actions/dashboard/actions";
import { obterTodasCategorias } from "../../../../actions/listarCategorias/action";

export default async function GerenciamentoProdutos({
  searchParams,
}: {
    searchParams: Promise<{
      query?: string;
      page?: string;
    }>
} 
) {
  const params = await searchParams;
  const currentPag = Number(params?.page) || 1;
  const query = params?.query || '';
  
  const { produtos, count, totalPages } = await getProdutosTabela(query, currentPag);
  const categorias = await obterTodasCategorias();
  
  return (
    <main className="w-full min-h-screen bg-(--var-Creme) p-6 lg:p-12">
      <div className="max-w-7xl mx-auto w-full pt-20 lg:pt-0">
        <TituloProdutos 
          titulo="Gerenciamento de Produtos" 
          descricao="Catálogo de camisas oficiais da loja tricolor." 
        />
        <TabelaProdutos 
          produtos={produtos} 
          totalDeProdutos={count} 
          totalPages={totalPages} 
          categorias={categorias}
        />
      </div>
    </main>
  );
}