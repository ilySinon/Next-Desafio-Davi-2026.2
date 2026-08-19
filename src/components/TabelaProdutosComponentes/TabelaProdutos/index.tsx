"use client";

import { useState } from "react";
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import ModalVisualizar from "../../Modais/ModalVisualizar";
import ModalEditar from "../../Modais/ModalEditar";
import ModalExcluir from "../../Modais/ModalExcluir";
import { Produto } from "@/types/data";

type ProdutosTabelaProps = {
  produtos: Produto[]
}

export function TabelaProdutos({ produtos }: ProdutosTabelaProps) {
  const [isVisualizarOpen, setIsVisualizarOpen] = useState(false);
  const [isEditarOpen, setIsEditarOpen] = useState(false);
  const [isExcluirOpen, setIsExcluirOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm overflow-x-auto">
        <table className="w-full min-w-200 text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="font-inter text-gray-500 uppercase text-xs lg:text-sm tracking-wider pb-4 font-normal">
                Imagem
              </th>
              <th className="font-inter text-gray-500 uppercase text-xs lg:text-sm tracking-wider pb-4 font-normal">
                Nome
              </th>
              <th className="font-inter text-gray-500 uppercase text-xs lg:text-sm tracking-wider pb-4 font-normal">
                Quantidade
              </th>
              <th className="font-inter text-gray-500 uppercase text-xs lg:text-sm tracking-wider pb-4 font-normal">
                Preço
              </th>
              <th className="font-inter text-gray-500 uppercase text-xs lg:text-sm tracking-wider pb-4 font-normal text-center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => {
              const preco = produto.variacoes?.[0]?.preco || 0;
              const precoFormatado = preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              });

              const quantidadeTotal = produto.variacoes?.reduce((accVariacao, variacao) => {
                const totalEstoque = variacao.estoques?.reduce((accEstoque, estoque) => {
                  return accEstoque + (estoque.quantidade || 0);
                }, 0) || 0;
                return accVariacao + totalEstoque;
              }, 0) || 0;

              return (
                <tr key={produto.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div className="w-16 h-16 bg-[#1B362F] rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
                      <img 
                        src={`${produto.variacoes?.[0]?.imagens?.[0]?.nomeImagem || '/basicas/Teste.png'}`}
                        alt={produto.nomeProduto}
                        className="w-full h-full object-cover opacity-80" 
                      />
                    </div>
                  </td>
                  <td className="py-4 font-inter text-sm lg:text-base text-black font-medium">
                    {produto.nomeProduto}
                  </td>
                  <td className="py-4 font-inter text-sm lg:text-base text-black">
                    {quantidadeTotal}
                  </td>
                  <td className="py-4 font-anton text-lg lg:text-xl text-black">
                    {precoFormatado}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center justify-center gap-4">
                      <button 
                        onClick={() => setIsVisualizarOpen(true)}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <Eye size={20} />
                      </button>
                      <button 
                        onClick={() => setIsEditarOpen(true)}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Pencil size={20} />
                      </button>
                      <button 
                        onClick={() => setIsExcluirOpen(true)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button className="text-black hover:text-gray-600 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <span className="font-anton text-xl text-black">1</span>
        <button className="text-black hover:text-gray-600 transition-colors">
          <ChevronRight size={24} />
        </button>
      </div>

      <ModalVisualizar 
        isOpen={isVisualizarOpen} 
        onClose={() => setIsVisualizarOpen(false)} 
      />
      
      <ModalEditar 
        isOpen={isEditarOpen} 
        onClose={() => setIsEditarOpen(false)} 
      />
      
      <ModalExcluir 
        isOpen={isExcluirOpen} 
        onClose={() => setIsExcluirOpen(false)} 
      />
    </>
  );
}