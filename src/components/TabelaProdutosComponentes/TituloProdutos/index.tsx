import { Plus } from "lucide-react";
import { BotaoComIcone } from "../../botoes";

type TituloProdutosProps = {
  titulo: string;
  descricao: string;
};

export function TituloProdutos({ titulo, descricao }: TituloProdutosProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
      <div>
        <h1 className="font-anton text-4xl lg:text-5xl text-black mb-2">
          {titulo}
        </h1>
        <span className="font-inter text-gray-500 text-sm lg:text-base block">
          {descricao}
        </span>
      </div>
      
      <BotaoComIcone 
        texto="Novo Produto" 
        href="/admin/produtos/novo"
        cor="bg-(--var-grenaCard) text-white hover:opacity-90 w-fit"
        icone={Plus} 
      />
    </div>
  );
}