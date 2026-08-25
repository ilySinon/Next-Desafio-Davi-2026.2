"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import ModalCriar from "../../Modais/ModalCriar";

type Categoria = {
  id: number;
  nomeCategoria: string;
};

type TituloProdutosProps = {
  titulo: string;
  descricao: string;
  categorias: Categoria[];
};

export function TituloProdutos({ titulo, descricao, categorias }: TituloProdutosProps) {
  const [isCriarOpen, setIsCriarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="font-anton text-4xl lg:text-5xl text-black mb-2">
            {titulo}
          </h1>
          <span className="font-inter text-gray-500 text-sm lg:text-base block">
            {descricao}
          </span>
        </div>
        
        <button 
          onClick={() => setIsCriarOpen(true)}
          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-inter font-bold text-sm uppercase transition-all bg-(--var-grenaCard) text-white hover:opacity-90 w-fit cursor-pointer shadow-sm"
        >
          Novo Produto
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>

      <ModalCriar 
        isOpen={isCriarOpen} 
        onClose={() => setIsCriarOpen(false)} 
        categorias={categorias}
      />
    </>
  );
}