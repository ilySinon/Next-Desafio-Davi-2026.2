"use client";

import { useState } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import criarProduto from "@/actions/modais/ModalCriar/actions";

type Categoria = {
  id: number;
  nomeCategoria: string;
};

type ModalCriarProps = {
  isOpen: boolean;
  onClose: () => void;
  categorias: Categoria[];
};

export default function ModalCriar({ isOpen, onClose, categorias }: ModalCriarProps) {
  const [imagens, setImagens] = useState<(string | null)[]>([null, null, null]);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const novasImagens = [...imagens];
      novasImagens[index] = url;
      setImagens(novasImagens);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    await criarProduto(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-md lg:max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F6F5EF] rounded-2xl p-6 relative shadow-xl">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-6 right-6 text-slate-500 hover:text-black transition-colors"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        <div className="mb-6">
          <h2 className="font-inter text-lg lg:text-xl font-bold text-black mb-1">
            Adicionar novo produto
          </h2>
          <p className="font-inter text-xs lg:text-sm text-slate-500">
            Preencha as informações abaixo para cadastrar um item completo no catálogo.
          </p>
        </div>

        <form action={handleSubmit} className="w-full">
          <div className="flex gap-3 lg:gap-4 mb-6">
            {[0, 1, 2].map((index) => (
              <label
                key={`add-image-${index}`}
                className="w-16 h-16 lg:w-20 lg:h-20 border-2 border-dashed border-gray-300 rounded-xl shrink-0 flex items-center justify-center text-slate-400 hover:text-black hover:border-gray-400 hover:bg-gray-200/50 transition-colors cursor-pointer overflow-hidden relative"
              >
                <input
                  type="file"
                  accept="image/*"
                  name={`imagem-${index}`}
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, index)}
                />
                {imagens[index] ? (
                  <img 
                    src={imagens[index] as string} 
                    alt={`Preview ${index}`} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <ImageIcon size={24} strokeWidth={2} />
                )}
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="flex flex-col gap-1 lg:col-span-2">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Nome do Produto</label>
              <input
                type="text"
                name="nomeProduto"
                placeholder="Ex: Camisa Goleiro 2026"
                required
                className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1 lg:col-span-2">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Descrição</label>
              <textarea
                name="produtoDescricao"
                placeholder="Descreva os detalhes do produto..."
                rows={3}
                required
                className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Categoria</label>
              <select name="idCategoriaProduto" required className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors">
                <option value="">Selecione uma categoria...</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nomeCategoria}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Preço (R$)</label>
              <input
                type="number"
                step="0.01"
                name="preco"
                placeholder="Ex: 349.90"
                required
                className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Cor</label>
              <input
                type="text"
                name="nomeCor"
                placeholder="Ex: Branco e Grená"
                required
                className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Gênero</label>
              <select name="nomeGenero" required className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors">
                <option value="">Selecione o gênero...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Unissex">Unissex</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Tamanho</label>
              <select name="idTamanho" required className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors">
                <option value="">Selecione o tamanho...</option>
                <option value="1">P</option>
                <option value="2">M</option>
                <option value="3">G</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-inter text-xs lg:text-sm text-slate-500">Quantidade em Estoque</label>
              <input
                type="number"
                name="quantidade"
                placeholder="Ex: 50"
                required
                className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-gray-300 bg-transparent text-slate-600 font-inter text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-[#6B1B29] text-white font-inter text-sm font-medium hover:bg-[#5a1622] transition-colors shadow-sm"
            >
              Cadastrar produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}