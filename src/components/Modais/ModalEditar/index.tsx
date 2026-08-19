import { X, Image as ImageIcon } from "lucide-react";

type ModalEditarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalEditar({ isOpen, onClose }: ModalEditarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm lg:max-w-md bg-[#F6F5EF] rounded-2xl p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-black transition-colors"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        <div className="mb-6">
          <h2 className="font-inter text-lg lg:text-xl font-bold text-black mb-1">
            Editar produto
          </h2>
          <p className="font-inter text-xs lg:text-sm text-slate-500">
            Atualize as informações do produto e salve as alterações
          </p>
        </div>

        <div className="flex gap-3 lg:gap-4 mb-6">
          {[1, 2].map((item) => (
            <div
              key={`filled-${item}`}
              className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-xl shrink-0"
            />
          ))}
          {[1, 2].map((item) => (
            <button
              key={`empty-${item}`}
              className="w-16 h-16 lg:w-20 lg:h-20 border border-gray-300 rounded-xl shrink-0 flex items-center justify-center text-black hover:bg-gray-200/50 transition-colors"
            >
              <ImageIcon size={24} strokeWidth={2} />
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <label className="font-inter text-xs lg:text-sm text-slate-500">Nome</label>
            <input
              type="text"
              defaultValue="Camisa III 2026 - CASA"
              className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-inter text-xs lg:text-sm text-slate-500">Descrição</label>
            <textarea
              defaultValue="Manto tricolor tradicional verde, branco e grená."
              rows={3}
              className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors resize-none"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-inter text-xs lg:text-sm text-slate-500">Preço</label>
            <input
              type="text"
              defaultValue="R$ 349,90"
              className="w-full bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm text-black font-inter outline-none focus:border-gray-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-gray-300 bg-transparent text-slate-600 font-inter text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2.5 rounded-lg bg-[#6B1B29] text-white font-inter text-sm font-medium hover:bg-[#5a1622] transition-colors shadow-sm"
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  );
}