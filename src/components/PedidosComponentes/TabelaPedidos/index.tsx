import Paginacao from "../../Paginacao";

type ItemPedidoProps = {
  id: number;
  nomeProduto: string;
  cor: string;
  tamanho: string;
  quantidade: number;
  valor: number;
};

type PedidoProps = {
  idPedido: number;
  dataCompra: string;
  status: string;
  valorTotal: number;
  itens: ItemPedidoProps[];
};

type TabelaPedidoProps = {
  pedidos: PedidoProps[];
  totalPages: number;
};

export function TabelaPedido({ pedidos, totalPages }: TabelaPedidoProps) {
  const getStatusStyle = (statusPedido: string) => {
    switch (statusPedido.toUpperCase()) {
      case 'PENDENTE':
        return 'bg-yellow-100 text-yellow-800';
      case 'APROVADO':
      case 'CONCLUIDO':
        return 'bg-green-100 text-green-800';
      case 'CANCELADO':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {pedidos.map((pedido) => {
        const valorTotalFormatado = pedido.valorTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
        const dataFormatada = new Date(pedido.dataCompra).toLocaleDateString('pt-BR');

        return (
          <div key={pedido.idPedido} className="w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div className="flex flex-col">
                <span className="font-inter font-bold text-sm text-black">Pedido #{pedido.idPedido}</span>
                <span className="font-inter text-xs text-gray-500">Realizado em: {dataFormatada}</span>
              </div>
              <span className={`font-inter font-bold text-xs px-3 py-1 rounded-full uppercase ${getStatusStyle(pedido.status)}`}>
                {pedido.status}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {pedido.itens.map((item) => {
                const valorItemFormatado = item.valor.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                });

                return (
                  <div key={item.id} className="flex justify-between items-center text-sm font-inter">
                    <span className="text-gray-700">
                      {item.nomeProduto} - {item.cor} (Tamanho: {item.tamanho}) x {item.quantidade}
                    </span>
                    <span className="font-bold text-black">{valorItemFormatado}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-2">
              <span className="font-inter font-bold text-sm text-gray-600">VALOR TOTAL:</span>
              <span className="font-anton text-xl text-[#7a1226]">{valorTotalFormatado}</span>
            </div>
          </div>
        );
      })}

      {totalPages > 1 && (
        <div className="mt-4">
          <Paginacao totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}