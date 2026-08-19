import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ProdutoInfosProps = {
  titulo: string;
  preco: string;
  descricao: string;
  hrefVoltar: string;
};

export function ProdutoInfos({ titulo, preco, descricao, hrefVoltar }: ProdutoInfosProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-inter text-xs tracking-widest uppercase">
          MANTO SAGRADO
        </span>
        
        <Link
          href={hrefVoltar}
          className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-black font-inter text-xs font-bold transition-colors uppercase"
        >
          VOLTAR <ArrowLeft size={16} />
        </Link>
      </div>

      <h1 className="text-4xl lg:text-6xl font-anton text-black uppercase mb-4">
        {titulo}
      </h1>

      <p className="text-3xl lg:text-4xl font-anton text-black mb-6">
        {preco}
      </p>

      <p className="text-gray-500 font-inter text-sm lg:text-base mb-10 leading-relaxed">
        {descricao}
      </p>
    </>
  );
}