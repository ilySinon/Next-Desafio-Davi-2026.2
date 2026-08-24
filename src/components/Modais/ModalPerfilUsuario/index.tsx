import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Usuario } from "../../../../types/data";
import { editarInfo } from "../../../../actions/editarInfos/actions";

type ModalPerfilUsuarioProps = {
  usuario: Usuario | any;
  onClose: () => void;
};

export default function ModalPerfilUsuario({ usuario, onClose }: ModalPerfilUsuarioProps) {
  const userData = usuario?.user || usuario;
  const router = useRouter();

  const handleSalvarEdicao = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const resposta = await editarInfo(formData);

    if (resposta?.sucesso) {
      onClose();
      router.refresh(); 
    } else {
      alert("Erro ao salvar os dados.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-3xl bg-[#F5F5DC] border border-black/10 rounded-2xl p-8 lg:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 text-black hover:scale-110 transition-transform"
        >
          <X size={24} />
        </button>

        <h2 className="font-anton text-3xl text-black text-center mb-8 tracking-wide">
          EDITAR INFORMAÇÕES
        </h2>

        <form onSubmit={handleSalvarEdicao} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">NOME</label>
              <input
                type="text"
                name="nome"
                defaultValue={userData?.nome || userData?.name || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">DATA DE NASCIMENTO</label>
              <input
                type="date"
                defaultValue={userData?.dataNascimento ? new Date(userData.dataNascimento).toISOString().split('T')[0] : ""}
                disabled
                className="w-full bg-black/5 border border-black/5 rounded-full px-6 py-4 text-black/40 text-sm font-inter outline-none cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">RUA</label>
              <input
                type="text"
                name="rua"
                defaultValue={userData?.endereco?.rua || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">BAIRRO</label>
              <input
                type="text"
                name="bairro"
                defaultValue={userData?.endereco?.bairro || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">NÚMERO</label>
              <input
                type="text"
                name="numero"
                defaultValue={userData?.endereco?.numero || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">CEP</label>
              <input
                type="text"
                name="cep"
                defaultValue={userData?.endereco?.cep || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">CIDADE</label>
              <input
                type="text"
                name="cidade"
                defaultValue={userData?.endereco?.cidade || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-black/70 font-anton tracking-wide text-sm">ESTADO</label>
              <input
                type="text"
                name="estado"
                defaultValue={userData?.endereco?.estado || ""}
                className="w-full bg-white/60 border border-black/10 rounded-full px-6 py-4 text-black text-sm font-inter outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full md:w-80 mx-auto mt-4 bg-[#7a1226] text-white font-inter font-bold text-sm rounded-full py-4 hover:bg-[#5a0d1c] transition-colors shadow-lg"
          >
            SALVAR ALTERAÇÕES
          </button>
        </form>
      </div>
    </div>
  );
}