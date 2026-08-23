"use server"

import prisma from "@/src/lib/db"

export default async function getProdutosCarrossel() {
  const produtos = await prisma.produto.findMany({
    orderBy:{
      lancamento: 'desc'
    },
    include: {
      categoria: true,
      variacoes: {
        include: {
          imagens: true,
          estoques: true,
        }
      }
    },
      take: 6
  });

  return produtos;
}


