import { CardNormal } from "../../../components/Cards";
import { SearchX } from "lucide-react";
import Paginacao from "../../Paginacao"; 

type CardsPesquisarProps = {
  produtos: any[];
  titulo: string;
  totalPages?: number;
};

export function CardsPesquisar({ produtos, titulo, totalPages = 1 }: CardsPesquisarProps) {
  if (produtos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-gray-400">
        <SearchX size={64} className="text-gray-300" />
        <h2 className="font-anton text-2xl text-gray-500">NENHUM PRODUTO ENCONTRADO</h2>
        <p className="font-inter text-sm text-center max-w-md">
          Não conseguimos encontrar nenhum produto com o nome "{titulo}". Tente buscar por outras palavras ou navegue pelas nossas categorias.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 mt-4">
        {produtos.map((produto) => (
          <CardNormal key={produto.id} produto={produto} />
        ))}
      </div>

      {totalPages > 1 && (
        <Paginacao totalPages={totalPages} />
      )}
    </div>
  );
}