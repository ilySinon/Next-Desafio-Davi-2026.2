import { TituloProdutos } from "../../../components/TabelaProdutosComponentes/TituloProdutos";
import { TabelaProdutos } from "../../../components/TabelaProdutosComponentes/TabelaProdutos";
import getProdutosTabela from "@/actions/dashboard/actions";

export default async function GerenciamentoProdutos() {
  const produtos = await getProdutosTabela();

  return (
    <main className="w-full min-h-screen bg-(--var-Creme) p-6 lg:p-12">
      <div className="max-w-7xl mx-auto w-full pt-20 lg:pt-0">
        <TituloProdutos 
          titulo="Gerenciamento de Produtos" 
          descricao="Catálogo de camisas oficiais da loja tricolor." 
        />
        <TabelaProdutos produtos={produtos}/>
      </div>
    </main>
  );
}