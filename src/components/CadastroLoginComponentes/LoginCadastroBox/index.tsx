import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { ReactNode } from "react";

type LoginCadastroBoxProps = {
  children: ReactNode;
  titulo: string;
  subtitulo: string;
  abaAtiva: "login" | "cadastro";
};

export function LoginCadastroBox({ children, titulo, subtitulo, abaAtiva }: LoginCadastroBoxProps) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 relative">
      <Image
        src="/basicas/LoginCadastro.png"
        alt="Fundo Login"
        fill
        priority
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-linear-to-r from-[#65001A]/60 via-[#00100C]/60 to-[#004C23]/60 z-10" />

      <div className="relative z-20 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-10 flex flex-col items-center shadow-2xl">
        <Link
          href="/"
          className="absolute top-6 left-6 text-white hover:scale-110 transition-transform"
        >
          <X size={24} />
        </Link>

        <Image
          src="/basicas/logo.png"
          alt="Logo Fluminense"
          width={60}
          height={60}
          className="mb-4"
        />

        <h1 className="font-anton text-3xl lg:text-4xl text-white text-center mb-1 tracking-wide">
          {titulo}
        </h1>
        <p className="font-inter text-xs lg:text-sm text-white/90 text-center mb-8">
          {subtitulo}
        </p>

        <div className="w-full flex rounded-xl border border-white/30 p-1 mb-8">
          <Link
            href="/login"
            className={`flex-1 font-inter font-bold text-sm py-3 rounded-lg text-center transition-colors ${
              abaAtiva === "login" 
                ? "bg-[#7a1226] text-white shadow-md" 
                : "text-white hover:bg-white/10"
            }`}
          >
            Login
          </Link>
          <Link
            href="/cadastro"
            className={`flex-1 font-inter font-bold text-sm py-3 rounded-lg text-center transition-colors ${
              abaAtiva === "cadastro" 
                ? "bg-[#7a1226] text-white shadow-md" 
                : "text-white hover:bg-white/10"
            }`}
          >
            Cadastro
          </Link>
        </div>

        {children}
      </div>
    </main>
  );
}