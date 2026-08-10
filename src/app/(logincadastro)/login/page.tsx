"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 relative">
      <Image
        src="/basicas/LoginCadastro.png"
        alt="Fundo Login"
        fill
        priority
        className="object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#65001A]/60 via-[#00100C]/60 to-[#004C23]/60 z-10" />

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
          Bem-vindo, tricolor
        </h1>
        <p className="font-inter text-xs lg:text-sm text-white/90 text-center mb-8">
          Acesse sua conta para acompanhar pedidos.
        </p>

        <div className="w-full flex rounded-xl border border-white/30 p-1 mb-8">
          <Link
            href="/login"
            className="flex-1 bg-[#7a1226] text-white font-inter font-bold text-sm py-3 rounded-lg text-center transition-colors shadow-md"
          >
            Login
          </Link>
          <Link
            href="/cadastro"
            className="flex-1 text-white font-inter font-bold text-sm py-3 rounded-lg text-center hover:bg-white/10 transition-colors"
          >
            Cadastro
          </Link>
        </div>

        <form className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-inter text-[10px] font-bold text-white uppercase tracking-wider">
              E-MAIL
            </label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-white/30 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/80 outline-none focus:bg-white/40 focus:border-white/50 transition-all text-sm shadow-inner"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-inter text-[10px] font-bold text-white uppercase tracking-wider">
              SENHA
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full bg-white/30 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/80 outline-none focus:bg-white/40 focus:border-white/50 transition-all text-sm shadow-inner"
            />
            <Link
              href="/esqueci-a-senha"
              className="text-white/90 text-xs text-right mt-1 hover:text-white hover:underline font-inter transition-colors"
            >
              Esqueci a senha
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7a1226] text-white font-inter font-bold text-sm rounded-full py-4 mt-4 hover:bg-[#5a0d1c] transition-colors shadow-lg"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </main>
  );
}