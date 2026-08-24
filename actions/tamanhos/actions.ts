"use server"

import prisma from "@/src/lib/db"

export async function obterEstoqueDaVariacao(idVariacao: number) {
  if (!idVariacao) return [];

  try {
    const estoques = await prisma.estoque.findMany({
      where: {
        idItem: idVariacao
      },
      include: {
        tamanho: true 
      },
      orderBy: {
        tamanho: {
          ordemTamanhos: "asc" 
        }
      }
    });

    return estoques;
  } catch (error) {
    console.error("Erro ao buscar estoques:", error);
    return [];
  }
}