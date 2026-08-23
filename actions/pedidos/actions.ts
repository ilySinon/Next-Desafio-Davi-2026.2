"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

const itensPorPag = 5; 

export async function obterMeusPedidos(currentPage: number = 1) {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return { pedidos: [], totalPages: 0 };
  }

  const offset = (currentPage - 1) * itensPorPag;

  try {
    const pedidos = await prisma.pedido.findMany({
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
                    produto: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        dataCompra: "desc" 
      },
      take: itensPorPag,
      skip: offset,
    });

    const count = await prisma.pedido.count({
      where: {
        idUsuario: Number(idDoUsuario)
      }
    });

    const totalPages = Math.ceil(count / itensPorPag);

    return { pedidos, totalPages };
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    return { pedidos: [], totalPages: 0 };
  }
}