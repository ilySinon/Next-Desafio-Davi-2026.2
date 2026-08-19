import { X } from "lucide-react";

type ModalVisualizarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalVisualizar({ isOpen, onClose }: ModalVisualizarProps) {
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
            Visualizar produto
          </h2>
          <p className="font-inter text-xs lg:text-sm text-slate-500">
            Detalhes do produto selecionado.
          </p>
        </div>

        <div className="flex gap-3 lg:gap-4 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-300 rounded-xl shrink-0"
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">
              Nome
            </span>
            <span className="block font-inter text-sm lg:text-base font-bold text-black">
              Camisa III 2026 - CASA
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">
              Descrição
            </span>
            <span className="block font-inter text-sm lg:text-base text-black leading-relaxed">
              Manto tricolor tradicional verde, branco e grená.
            </span>
          </div>

          <div>
            <span className="block font-inter text-xs lg:text-sm text-slate-500 mb-1">
              Preço
            </span>
            <span className="block font-inter text-sm lg:text-base font-bold text-[#6B1B29]">
              R$ 349,90
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}