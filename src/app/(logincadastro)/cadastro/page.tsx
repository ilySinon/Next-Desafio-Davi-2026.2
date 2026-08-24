"use client";

import { LoginCadastroBox } from "../../../components/CadastroLoginComponentes/LoginCadastroBox";
import CadastroBox from "../../../components/CadastroLoginComponentes/CadastroBox";

export default function Cadastro() {
  return (
    <LoginCadastroBox 
      titulo="Bem-vindo, tricolor" 
      subtitulo="Crie sua conta para acompanhar pedidos."
      abaAtiva="cadastro"
    >
      <CadastroBox />
    </LoginCadastroBox>
  );
}