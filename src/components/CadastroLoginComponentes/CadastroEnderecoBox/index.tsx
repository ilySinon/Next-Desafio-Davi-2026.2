"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginCadastroInput } from "../LoginCadastroInput";
import { cadastrarEndereco } from "../../../../actions/LoginCadastro/CadastroEndereco/actions";

type CadastroEnderecoBoxProps = {
  onVoltar: () => void;
};

export default function CadastroEnderecoBox({ onVoltar }: CadastroEnderecoBoxProps) {
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagemErro(null);
    setCarregando(true);
    
    const formData = new FormData(e.currentTarget);
    const resultado = await cadastrarEndereco(formData);

    setCarregando(false);

    if (resultado?.erro) {
      setMensagemErro(resultado.erro);
    } else if (resultado?.sucesso) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="relative z-20 w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-10 flex flex-col items-center shadow-2xl">
      <Link
        href="/"
        className="absolute top-6 left-6 text-white hover:scale-110 transition-transform"
      >
        <X size={24} />
      </Link>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LoginCadastroInput
            label="RUA"
            name="rua"
            type="text"
            placeholder="Digite o nome da sua Rua"
            required
          />

          <LoginCadastroInput
            label="BAIRRO"
            name="bairro"
            type="text"
            placeholder="Digite o nome do seu Bairro"
            required
          />

          <LoginCadastroInput
            label="NÚMERO"
            name="numero"
            type="text"
            placeholder="Digite o número da sua casa"
            required
          />

          <LoginCadastroInput
            label="COMPLEMENTO"
            name="complemento"
            type="text"
            placeholder="Digite o complemento"
          />

          <LoginCadastroInput
            label="CIDADE"
            name="cidade"
            type="text"
            placeholder="Digite o nome da sua cidade"
            required
          />

          <LoginCadastroInput
            label="ESTADO"
            name="estado"
            type="text"
            placeholder="Digite o nome do seu Estado"
            required
          />

          <LoginCadastroInput
            label="CEP"
            name="cep"
            type="text"
            placeholder="Digite o seu CEP"
            required
          />
        </div>

        {mensagemErro && (
          <div className="mt-2 p-3 rounded-lg bg-red-500/20 border border-red-500 text-red-100 text-sm font-medium font-inter text-center">
            {mensagemErro}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-4 items-center">
          <button
            type="submit"
            disabled={carregando}
            className="w-full md:w-80 bg-[#7a1226] text-white font-inter font-bold text-sm rounded-full py-4 hover:bg-[#5a0d1c] transition-colors shadow-lg disabled:opacity-50"
          >
            {carregando ? "SALVANDO..." : "CONCLUIR CADASTRO"}
          </button>

          <button
            type="button"
            onClick={onVoltar}
            className="text-xs text-white/80 hover:text-white underline font-inter transition-colors mt-2"
          >
            Pular esta etapa / Ir para o Login
          </button>
        </div>
      </form>
    </div>
  );
}