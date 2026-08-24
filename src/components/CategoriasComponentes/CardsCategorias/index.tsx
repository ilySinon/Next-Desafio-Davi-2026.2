import { CardNormal } from "../../../components/Cards";
import { PackageSearch } from "lucide-react";
import Paginacao from "../../Paginacao";
import { Produto } from "@/types/data"

type CardsCategoriasProps = {
  produtos: Produto[]; 
  titulo: string;
  totalPages?: number;
};

export function CardsCategorias({ produtos, titulo, totalPages = 1 }: CardsCategoriasProps) {
  
  if (produtos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 text-gray-400">
        <PackageSearch size={64} className="text-gray-300" />
        <h2 className="font-anton text-2xl text-gray-500 uppercase">NENHUM PRODUTO ENCONTRADO</h2>
        <p className="font-inter text-sm text-center max-w-md">
          Ainda não temos produtos cadastrados na categoria "{titulo}". Volte em breve!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
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