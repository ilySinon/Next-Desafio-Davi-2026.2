"use server"

import prisma from "@/src/lib/db"

const itemsPorTabela = 5;

export default async function getProdutosTabela(query: string, currentPage: number) {
  const offset = (currentPage - 1) * itemsPorTabela;

  const produtos = await prisma.produto.findMany({
     where: {
            OR: [{nomeProduto: {contains: query, mode: "insensitive"}, produtoDescricao: {contains: query, mode: "insensitive"}}]
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
    take: itemsPorTabela,
    skip: offset,
    orderBy: {
      nomeProduto: "asc"
    }
  });

  const count = await prisma.produto.count();

  const totalPages = Math.ceil(count / itemsPorTabela); 

  return { produtos, count, totalPages };
}