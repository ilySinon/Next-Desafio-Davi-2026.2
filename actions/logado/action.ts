"use server"

import { cookies } from "next/headers";

export async function obterUsuario() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_usuario")?.value;

  if (!token) return null;

  try {
    const resposta = await fetch("https://treinamentoapi.codejr.com.br/api/me", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (resposta.ok) {
      return await resposta.json();
    }
    return null;
  } catch (error) {
    return null;
  }
}