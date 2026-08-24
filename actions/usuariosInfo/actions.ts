"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function obterDadosUsuario() {
  const usuarioApi = await obterUsuario();

  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return null;
  }

  try {
    const Usuario = await prisma.usuario.findUnique({
      where: {
        id: Number(idDoUsuario)
      },
      include: {
        endereco: true
      }
    });

    return Usuario;
  } catch (error) {
    return null;
  }
}