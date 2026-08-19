type ModalExcluirProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalExcluir({ isOpen, onClose }: ModalExcluirProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm lg:max-w-md bg-[#F6F5EF] rounded-2xl p-6 relative shadow-xl">
        <h2 className="font-inter text-lg lg:text-xl font-bold text-black mb-2">
          Excluir produto
        </h2>
        
        <p className="font-inter text-sm text-slate-500 mb-8 leading-relaxed">
          Tem certeza que deseja excluir <span className="font-bold text-slate-700">Camisa III 2026 - CASA</span>? Essa ação não pode ser desfeita
        </p>

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