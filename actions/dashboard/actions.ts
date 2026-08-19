"use server"

import prisma from "@/src/lib/db"

export default async function getProdutosTabela() {
  const produtos = await prisma.produto.findMany({
    include: {
      categoria: true,
      variacoes: {
        include: {
          imagens: true,
          estoques: true,
        }
      }
    },
  });

  return produtos;
}


