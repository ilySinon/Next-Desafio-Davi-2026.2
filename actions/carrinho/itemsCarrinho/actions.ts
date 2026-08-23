"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function obterCarrinho() {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return null;
  }

  try {
    const carrinho = await prisma.carrinho.findFirst({
      where: {
        idUsuario: Number(idDoUsuario)
      },
      include: {
        itens: {
          include: {
            estoque: {
              include: {
                tamanho: true,
                variacao: {
                  include: {
                    produto: true,
                    imagens: true
                  }
                }
              }
            }
          },
          orderBy: {
            id: 'asc'
          }
        }
      }
    });

    return carrinho;
  } catch (error) {
    return null;
  }
}