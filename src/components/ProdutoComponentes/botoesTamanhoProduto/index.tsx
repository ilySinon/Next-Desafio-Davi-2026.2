"use client";

import { useState } from "react";
import { BotaoTamanho } from "../../botoes"; 

export function BotoesTamanhoProduto() {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState<string>("");
  const tamanhos = ["PP", "P", "M", "G", "GG", "XG"];

  return (
    <div className="flex flex-col gap-3 mb-10">
      <span className="font-inter text-xs font-bold text-black uppercase">Tamanho</span>
      <div className="flex flex-wrap gap-2 lg:gap-3">
        {tamanhos.map((tamanho) => (
          <BotaoTamanho
            key={tamanho}
            texto={tamanho}
            ativo={tamanhoSelecionado === tamanho}
            onClick={() => setTamanhoSelecionado(tamanho)}
          />
        ))}
      </div>
    </div>
  );
}