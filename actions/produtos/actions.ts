"use server";

import prisma from "@/src/lib/db"


export default async function getProduto(id: number) {
  const produto = await prisma.produto.findUnique({
    where: {
        id: id,
    },
    include: {
      variacoes: {
        include: {
          imagens: true,
          estoques: true,
        },
      },
    },
  });

  return produto;
}
