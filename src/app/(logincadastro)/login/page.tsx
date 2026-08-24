"use client";

import { LoginCadastroBox } from "../../../components/CadastroLoginComponentes/LoginCadastroBox";
import LoginBox from "../../../components/CadastroLoginComponentes/LoginBox";

export default function Login() {
  return (
    <LoginCadastroBox 
      titulo="Bem-vindo, tricolor" 
      subtitulo="Acesse sua conta para acompanhar pedidos."
      abaAtiva="login"
    >
      <LoginBox />
    </LoginCadastroBox>
  );
}