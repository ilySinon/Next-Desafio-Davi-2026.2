"use server"

import { cookies } from "next/headers";

export async function Logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token_usuario")?.value;

  if (token) {
    try {
      await fetch("http://treinamentoapi.codejr.com.br/api/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Erro na API ao deslogar", error);
    }
  }

  cookieStore.set("token_usuario", "", {
    maxAge: 0,
    path: "/",
  });
}