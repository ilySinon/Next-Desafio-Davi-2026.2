
import { TabelaPedido } from "../../../../components/PedidosComponentes/TabelaPedidos";
import { obterMeusPedidos } from "../../../../../actions/pedidos/actions";
import { PackageSearch } from "lucide-react";
import { TituloPedido } from "../../../../components/PedidosComponentes/TituloPedidos";

type PaginaMeusPedidosProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function PaginaMeusPedidos({ searchParams }: PaginaMeusPedidosProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;

  const { pedidos, totalPages } = await obterMeusPedidos(currentPage);

  const pedidosFormatados = pedidos.map((pedido: any) => {
    const itensFormatados = pedido.itens.map((item: any) => {
      const variacao = item.estoque.variacao;
      const produto = variacao.produto;

      return {
        id: item.id,
        nomeProduto: produto.nomeProduto,
        cor: variacao.nomeCor,
        tamanho: item.estoque.tamanho.nomeTamanho,
        quantidade: item.quantidadePedido,
        valor: item.valorPedido
      };
    });

    return {
      idPedido: pedido.id,
      dataCompra: pedido.dataCompra,
      status: pedido.status,
      valorTotal: pedido.valorTotal,
      itens: itensFormatados
    };
  });

  return (
    <main className="w-full flex flex-col items-center bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="w-full max-w-4xl">
        <TituloPedido/>

        {pedidosFormatados.length === 0 ? (
          <div className="w-full bg-white border border-gray-200 rounded-2xl p-12 text-center flex flex-col items-center gap-4 shadow-sm mt-4">
            <PackageSearch size={48} className="text-gray-400" />
            <h2 className="font-anton text-2xl text-gray-700">NENHUM PEDIDO ENCONTRADO</h2>
            <p className="font-inter text-sm text-gray-500 max-w-sm">
              Você ainda não realizou nenhuma compra na nossa loja. Escolha um produto e finalize seu primeiro pedido!
            </p>
          </div>
        ) : (
          <TabelaPedido pedidos={pedidosFormatados} totalPages={totalPages} />
        )}
      </div>
    </main>
  );
}