"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { obterUsuario } from "@/actions/logado/action";
import { obterDadosUsuario } from "@/actions/usuariosInfo/actions";
import { Logout } from "@/actions/LoginCadastro/Logout/actions";
import BoxPerfil from "../../../components/PerfilComponentes/BoxPerfil";
import ModalPerfilUsuario from "../../../components/Modais/ModalPerfilUsuario";
import ImagemPerfil from "../../../components/PerfilComponentes/ImagemPerfil";
import { Usuario } from "../../../../types/data";

export default function Perfil() {
  const [usuario, setUsuario] = useState<any>(null);
  const [dadosCompletos, setDadosCompletos] = useState<Usuario | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function carregarDados() {
      const dadosApi = await obterUsuario();
      if (dadosApi) {
        setUsuario(dadosApi);
        const dadosDB = await obterDadosUsuario();
        setDadosCompletos(dadosDB as Usuario || dadosApi);
      } else {
        router.push("/login");
      }
    }
    carregarDados();
  }, [router]);

  const handleLogout = async () => {
    await Logout();
    router.push("/login");
  };

  if (!usuario || !dadosCompletos) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center text-black font-inter">
        Carregando informações...
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full pt-32 pb-12 px-6 flex flex-col items-center bg-[#F5F5DC]">
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-6">
        
        <h1 className="font-anton text-4xl lg:text-5xl text-black tracking-wide text-center">
          MEU PERFIL
        </h1>

        <BoxPerfil
          usuario={dadosCompletos}
          onOpenModal={() => setIsModalOpen(true)}
          onLogout={handleLogout}
        />
      </div>

      {isModalOpen && (
        <ModalPerfilUsuario
          usuario={dadosCompletos}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}