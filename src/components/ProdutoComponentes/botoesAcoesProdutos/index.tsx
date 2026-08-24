"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { adicionarItemCarrinho } from "@/actions/carrinho/adicionar/actions";

type BotoesAcoesProps = {
  idEstoque: number | null;
};

export default function BotoesAcoes({ idEstoque }: BotoesAcoesProps) {
  const [carregandoCarrinho, setCarregandoCarrinho] = useState(false);
  const [carregandoCompra, setCarregandoCompra] = useState(false);
  const router = useRouter();

  const handleAdicionarAoCarrinho = async () => {
    if (!idEstoque) {
      alert("Por favor, selecione um tamanho antes de adicionar ao carrinho.");
      return;
    }

    setCarregandoCarrinho(true);
    const resposta = await adicionarItemCarrinho(idEstoque, 1);
    setCarregandoCarrinho(false);

    if (resposta.erro) {
      alert(resposta.erro);
    } else {
      alert("Produto adicionado ao carrinho com sucesso!");
      router.refresh();
    }
  };

  const handleComprarAgora = async () => {
    if (!idEstoque) {
      alert("Por favor, selecione um tamanho antes de comprar.");
      return;
    }

    setCarregandoCompra(true);
    const resposta = await adicionarItemCarrinho(idEstoque, 1);
    setCarregandoCompra(false);

    if (resposta.erro) {
      alert(resposta.erro);
    } else {
      router.push("/carrinho");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-6">
      <button 
        onClick={handleAdicionarAoCarrinho}
        disabled={carregandoCarrinho || carregandoCompra}
        className="w-full lg:w-1/2 bg-[#7a1226] hover:bg-[#5a0d1c] text-white font-inter font-bold text-sm py-4 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
      >
        <ShoppingCart size={18} />
        {carregandoCarrinho ? "ADICIONANDO..." : "ADICIONAR AO CARRINHO"}
      </button>

      <button 
        onClick={handleComprarAgora}
        disabled={carregandoCarrinho || carregandoCompra}
        className="w-full lg:w-1/2 bg-black hover:bg-gray-800 text-white font-inter font-bold text-sm py-4 rounded-full transition-colors disabled:opacity-50 cursor-pointer"
      >
        {carregandoCompra ? "PROCESSANDO..." : "COMPRAR AGORA"}
      </button>
    </div>
  );
}