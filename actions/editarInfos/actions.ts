"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function editarInfo(formData: FormData) {
  const usuarioApi = await obterUsuario();
  const userData = usuarioApi?.user || usuarioApi;

  if (!userData?.id) {
    return { erro: "Usuário não autenticado." };
  }

  const nome = formData.get("nome") as string;
  const rua = formData.get("rua") as string;
  const bairro = formData.get("bairro") as string;
  const numero = formData.get("numero") as string;
  const cep = formData.get("cep") as string;
  const cidade = formData.get("cidade") as string;
  const estado = formData.get("estado") as string;

  try {
    await prisma.usuario.upsert({
      where: {
        id: Number(userData.id)
      },
      update: {
        nome: nome,
        endereco: {
          upsert: {
            create: { rua, bairro, numero, cep, cidade, estado },
            update: { rua, bairro, numero, cep, cidade, estado }
          }
        }
      },
      create: {
        id: Number(userData.id),
        nome: nome,
        email: userData.email || "", 
        senha: "", 
        endereco: {
          create: { rua, bairro, numero, cep, cidade, estado }
        }
      }
    });

    return { sucesso: true };
  } catch (error) {
    return { erro: "Falha ao salvar no banco de dados." };
  }
}