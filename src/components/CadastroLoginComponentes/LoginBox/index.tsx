"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginCadastroInput } from "../LoginCadastroInput";
import { fazerLogin } from "../../../../actions/LoginCadastro/Login/actions";

export default function LoginBox() {
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagemErro(null);

    const formData = new FormData(e.currentTarget);
    const resultado = await fazerLogin(formData);

    if (resultado?.erro) {
      setMensagemErro(resultado.erro);
    } else if (resultado?.sucesso) {
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <LoginCadastroInput 
        label="E-MAIL" 
        name="email"
        type="email" 
        placeholder="Digite seu e-mail" 
        required
      />

      <div className="flex flex-col gap-1 w-full">
        <LoginCadastroInput 
          label="SENHA" 
          name="senha"
          type="password" 
          placeholder="Digite sua senha" 
          required
        />
        <Link
          href="/esqueci-a-senha"
          className="text-white/90 text-xs text-right mt-1 hover:text-white hover:underline font-inter transition-colors"
        >
          Esqueci a senha
        </Link>
      </div>

      {mensagemErro && (
        <div className="p-3 rounded-lg bg-red-500/20 border border-red-500 text-red-100 text-sm font-medium text-center">
          {mensagemErro}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#7a1226] text-white font-inter font-bold text-sm rounded-full py-4 mt-4 hover:bg-[#5a0d1c] transition-colors shadow-lg"
      >
        ENTRAR
      </button>
    </form>
  );
}