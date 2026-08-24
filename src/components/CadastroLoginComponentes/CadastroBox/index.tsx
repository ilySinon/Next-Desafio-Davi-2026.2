"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginCadastroInput } from "../LoginCadastroInput";
import { cadastrarUsuario } from "../../../../actions/LoginCadastro/Cadastro/actions";

export default function CadastroBox() {
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const router = useRouter();

  const handleCadastrar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagemErro(null);
    
    const formData = new FormData(e.currentTarget);
    
    if (formData.get("senha") !== formData.get("confirmarSenha")) {
      setMensagemErro("As senhas não coincidem.");
      return;
    }

    const resultado = await cadastrarUsuario(formData);

    if (resultado?.erro) {
      setMensagemErro(resultado.erro);
    } else if (resultado?.sucesso) {
      router.push("/cadastro/endereco");
    }
  };

  return (
    <form onSubmit={handleCadastrar} className="w-full flex flex-col gap-4">
      <LoginCadastroInput 
        label="E-MAIL" 
        name="email"
        type="email" 
        placeholder="Digite seu e-mail" 
        required
      />

      <LoginCadastroInput 
        label="SENHA" 
        name="senha"
        type="password" 
        placeholder="Digite sua senha" 
        required
      />

      <LoginCadastroInput 
        label="CONFIRMAR SENHA" 
        name="confirmarSenha"
        type="password" 
        placeholder="Confirme sua senha" 
        required
      />

      <LoginCadastroInput 
        label="NOME" 
        name="nome"
        type="text" 
        placeholder="Digite seu nome completo" 
        required
      />

      {mensagemErro && (
        <div className="p-3 rounded-lg bg-red-500/20 border border-red-500 text-red-100 text-sm font-medium text-center">
          {mensagemErro}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-[#7a1226] text-white font-inter font-bold text-sm rounded-full py-4 mt-2 hover:bg-[#5a0d1c] transition-colors shadow-lg"
      >
        CADASTRAR
      </button>
    </form>
  );
}