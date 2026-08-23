"use server"

import { cookies } from "next/headers";

export async function fazerLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const senha = formData.get("senha") as string;

  if (!email || !senha) {
    return { erro: "Preencha todos os campos." };
  }

  try {
    const resposta = await fetch("http://treinamentoapi.codejr.com.br/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
    });

    const dadosDaApi = await resposta.json();

    if (resposta.ok) {
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
      return { erro: "E-mail ou senha incorretos." };
    }

  } catch (error) {
    return { erro: "Falha na comunicação com o servidor da API." };
  }
}