"use client";

import { X } from "lucide-react";
import { Produto } from "@/types/data";

type ModalVisualizarProps = {
  isOpen: boolean;
  onClose: () => void;
  produto?: Produto | null;
};

export default function ModalVisualizar({ isOpen, onClose, produto }: ModalVisualizarProps) {
  if (!isOpen || !produto) return null;

  const variacao = produto.variacoes?.[0];
  const precoFormatado = (variacao?.preco || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  const categoriasMap: Record<number, string> = {
    1: "Camisas", 2: "Moletons", 3: "Calças", 4: "Bonés", 5: "Bermudas", 6: "Manga Longa"
  };
  const categoriaNome = categoriasMap[produto.idCategoriaProduto] || "Não definida";

  const tamanhosMap: Record<number, string> = {
    1: "P", 2: "M", 3: "G"
  };
  const estoque = variacao?.estoques?.[0];
  const tamanhoNome = tamanhosMap[estoque?.idTamanho || 0] || "Não definido";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F6F5EF] rounded-2xl p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-black transition-colors"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        <div className="mb-6">
          <h2 className="font-inter text-lg lg:text-xl font-bold text-black mb-1">
            Visualizar produto
          </h2>
          <p className="font-inter text-xs lg:text-sm text-slate-500">
            Detalhes completos do produto selecionado.
          </p>
        </div>

        <div className="flex gap-3 lg:gap-4 mb-8">
          {[0, 1, 2].map((index) => {
            const img = variacao?.imagens?.[index]?.nomeImagem;
            return (
              <div
                key={`view-image-${index}`}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-xl shrink-0 overflow-hidden border border-gray-300 flex items-center justify-center"
              >
                {img ? (
                  <img src={img} alt={`Imagem ${index + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs text-gray-400 font-inter">Vazio</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Nome</span>
            <span className="block font-inter text-sm lg:text-base font-bold text-black">
              {produto.nomeProduto}
            </span>
          </div>

          <div className="lg:col-span-2">
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Descrição</span>
            <span className="block font-inter text-sm lg:text-base text-black leading-relaxed">
              {produto.produtoDescricao}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Categoria</span>
            <span className="block font-inter text-sm lg:text-base text-black">
              {categoriaNome}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Preço</span>
            <span className="block font-inter text-sm lg:text-base font-bold text-[#6B1B29]">
              {precoFormatado}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Cor</span>
            <span className="block font-inter text-sm lg:text-base text-black">
              {variacao?.nomeCor || "Não definida"}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Gênero</span>
            <span className="block font-inter text-sm lg:text-base text-black">
              {variacao?.nomeGenero || "Não definido"}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Tamanho</span>
            <span className="block font-inter text-sm lg:text-base text-black">
              {tamanhoNome}
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">Quantidade em Estoque</span>
            <span className="block font-inter text-sm lg:text-base text-black">
              {estoque?.quantidade || 0} unidades
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}