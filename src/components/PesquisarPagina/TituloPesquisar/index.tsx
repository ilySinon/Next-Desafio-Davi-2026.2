import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type TituloPesquisarProps = {
  termo: string;
  quantidade: number;
};

export function TituloPesquisar({ termo, quantidade }: TituloPesquisarProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-600 hover:text-black font-inter text-xs font-bold mb-4 transition-colors uppercase w-fit"
      >
        <ArrowLeft size={16} /> VOLTAR PARA O INÍCIO
      </Link>
      <h1 className="font-anton text-3xl lg:text-5xl text-black uppercase tracking-wide">
        {termo ? `Resultados para: "${termo}"` : "Produtos encontrados"}
      </h1>
      <span className="font-inter text-sm text-gray-500">
        {quantidade === 0 
          ? "Nenhum produto encontrado" 
          : `${quantidade} ${quantidade === 1 ? "produto encontrado" : "produtos encontrados"}`}
      </span>
    </div>
  );
}