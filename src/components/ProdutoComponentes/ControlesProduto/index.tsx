"use client";

import { useState } from "react";
import { BotoesTamanhoProduto } from "../botoesTamanhoProduto";
import BotoesAcoes from "../botoesAcoesProdutos";

type ControlesProdutoProps = {
  idVariacao: number;
};

export default function ControlesProduto({ idVariacao }: ControlesProdutoProps) {
  const [estoqueSelecionado, setEstoqueSelecionado] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <BotoesTamanhoProduto 
        idVariacao={idVariacao} 
        onTamanhoSelecionado={setEstoqueSelecionado} 
      />
      
      <BotoesAcoes idEstoque={estoqueSelecionado} />
    </div>
  );
}