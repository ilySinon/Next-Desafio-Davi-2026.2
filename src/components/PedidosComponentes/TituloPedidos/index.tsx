import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Titulo } from "../../../components/Titulos";

export function TituloPedido() {
  return (
    <div className="w-full max-w-4xl flex flex-col mb-8">
      <Link
        href="/perfil"
        className="flex items-center gap-2 text-gray-600 hover:text-black font-inter text-xs font-bold mb-6 transition-colors uppercase w-fit"
      >
        <ArrowLeft size={16} /> VOLTAR PARA O PERFIL
      </Link>
      <div className="flex justify-center">
        <Titulo texto="MEUS PEDIDOS" />
      </div>
    </div>
  );
}