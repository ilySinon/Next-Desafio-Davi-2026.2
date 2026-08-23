"use server"

import { cookies } from "next/headers";

export async function cadastrarUsuario(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("senha") as string;

  try {
    const resposta = await fetch("http://treinamentoapi.codejr.com.br/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nome,
        email: email,
        password: senha
      })
    });

    const textoResposta = await resposta.text();

    if (resposta.ok) {
      const dadosDaApi = JSON.parse(textoResposta);
      const cookieStore = await cookies();
      
      cookieStore.set("token_usuario", dadosDaApi.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return { sucesso: true };
    } else {
      try {
        const erroJson = JSON.parse(textoResposta);
        return { erro: erroJson.message || "Erro ao cadastrar. Verifique os dados." };
      } catch {
        return { erro: "Erro no servidor da API." };
      }
    }

  } catch (error) {
    return { erro: "Falha na comunicação com o servidor da API." };
  }
}