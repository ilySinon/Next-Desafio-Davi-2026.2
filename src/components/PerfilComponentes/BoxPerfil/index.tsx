"use client";

import { Usuario } from "@/types/data";
import { Package, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import ImagemPerfil from "../ImagemPerfil";

type BoxPerfilProps = {
  usuario: Usuario;
  onOpenModal: () => void;
  onLogout: () => void;
};

export default function BoxPerfil({ usuario, onOpenModal, onLogout }: BoxPerfilProps) {
  const router = useRouter();

  return (
    <div className="w-full bg-white/40 backdrop-blur-md border border-black/10 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-10 items-center justify-between">
      
      <ImagemPerfil imagemAtual={usuario.imagemPerfil} />

      <div className="flex flex-col gap-4 w-full md:w-72 shrink-0">
        <button
          onClick={onOpenModal}
          className="w-full bg-black/5 hover:bg-black/10 border border-black/20 text-black font-inter font-bold text-sm px-8 py-4 rounded-full transition-colors"
        >
          Editar Informações
        </button>

        <button
          onClick={() => router.push("/perfil/pedidos")}
          className="w-full bg-black/5 hover:bg-black/10 border border-black/20 text-black font-inter font-bold text-sm px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <Package size={18} /> Meus Pedidos
        </button>

        <button
          onClick={onLogout}
          className="w-full bg-[#7a1226] hover:bg-[#5a0d1c] text-white font-inter font-bold text-sm px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          <LogOut size={18} /> Sair da Conta
        </button>
      </div>
    </div>
  );
}