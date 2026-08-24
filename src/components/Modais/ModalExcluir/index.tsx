"use client";

import { useState } from "react";
import { Produto } from "@/types/data";
import { excluirProduto } from "../../../../actions/modais/ModalExcluir/actions";

type ModalExcluirProps = {
  isOpen: boolean;
  onClose: () => void;
  produto: Produto | null;
};

export default function ModalExcluir({ isOpen, onClose, produto }: ModalExcluirProps) {
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  if (!isOpen || !produto) return null;

  const handleExcluir = async () => {
    setMensagemErro(null);
    const resultado = await excluirProduto(produto.id);

    if (resultado?.erro) {
      setMensagemErro(resultado.erro);
    } else if (resultado?.sucesso) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm lg:max-w-md bg-[#F6F5EF] rounded-2xl p-6 relative shadow-xl">
        <h2 className="font-inter text-lg lg:text-xl font-bold text-black mb-2">
          Excluir produto
        </h2>
        
        <p className="font-inter text-sm text-slate-500 mb-8 leading-relaxed">
          Tem certeza que deseja excluir <span className="font-bold text-slate-700">{produto.nomeProduto}</span>? Essa ação não pode ser desfeita.
        </p>

        {mensagemErro && (
          <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm font-medium font-inter">
            {mensagemErro}
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-gray-300 bg-transparent text-slate-600 font-inter text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleExcluir}
            className="px-4 py-2.5 rounded-lg bg-red-600 text-white font-inter text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
          >
            Excluir produto
          </button>
        </div>
      </div>
    </div>
  );
}