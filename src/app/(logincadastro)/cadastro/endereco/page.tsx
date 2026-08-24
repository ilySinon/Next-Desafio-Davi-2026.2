"use client";

import Image from "next/image";
import CadastroEnderecoBox from "../../../../components/CadastroLoginComponentes/CadastroEnderecoBox";
import { useRouter } from "next/navigation";

export default function EnderecoCadastro() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 relative">
      <Image
        src="/basicas/LoginCadastro.png"
        alt="Fundo Cadastro"
        fill
        priority
        className="object-cover z-0"
      />
      
      <div className="absolute inset-0 bg-linear-to-r from-[#65001A]/60 via-[#00100C]/60 to-[#004C23]/60 z-10" />

      <CadastroEnderecoBox onVoltar={() => router.push("/login")} />
    </main>
  );
}