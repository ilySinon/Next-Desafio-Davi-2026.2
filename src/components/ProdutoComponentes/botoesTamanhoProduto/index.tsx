"use client";

import { useState, useEffect } from "react";
import { BotaoTamanho } from "../../botoes"; 
import { obterEstoqueDaVariacao } from "@/actions/tamanhos/actions";


type BotoesTamanhoProdutoProps = {
  idVariacao: number;
  onTamanhoSelecionado: (idEstoque: number) => void;
};

export function BotoesTamanhoProduto({ idVariacao, onTamanhoSelecionado }: BotoesTamanhoProdutoProps) {
  const [estoques, setEstoques] = useState<any[]>([]);
  const [estoqueSelecionado, setEstoqueSelecionado] = useState<number | null>(null);

  useEffect(() => {
    async function carregarTamanhos() {
      const dados = await obterEstoqueDaVariacao(idVariacao);
      setEstoques(dados);
    }
    
    if (idVariacao) {
      carregarTamanhos();
    }
  }, [idVariacao]);

  const handleSelecao = (idEstoque: number) => {
    setEstoqueSelecionado(idEstoque);
    onTamanhoSelecionado(idEstoque); 
  };

  if (estoques.length === 0) {
    return (
      <div className="flex flex-col gap-3 mb-10">
        <span className="font-inter text-xs font-bold text-black uppercase">Tamanho</span>
        <span className="font-inter text-sm text-gray-500">Carregando tamanhos...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 mb-10">
      <span className="font-inter text-xs font-bold text-black uppercase">Tamanho</span>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {estoques.map((estoque) => {
          const semEstoque = estoque.quantidade <= 0;

          return (
            <div key={estoque.id} className="relative">
              <BotaoTamanho
                texto={estoque.tamanho.nomeTamanho}
                ativo={estoqueSelecionado === estoque.id}
                onClick={() => !semEstoque && handleSelecao(estoque.id)}
              />
              {semEstoque && (
                <div className="absolute inset-0 bg-white/50 cursor-not-allowed rounded-2xl" title="Esgotado"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}