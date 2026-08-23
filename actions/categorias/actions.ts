"use server"

import prisma from "@/src/lib/db"

const itemsPorPag = 12;

export default async function getProdutosCategoria(query: string, currentPage: number) {
  const offset = (currentPage - 1) * itemsPorPag;

  const filtro = (query && query !== "todas") 
    ? { categoria: { nomeCategoria: { equals: query, mode: "insensitive" as const } } } 
    : {};

  const produtos = await prisma.produto.findMany({
    where: filtro,
    include: {
      categoria: true,
      variacoes: {
        include: {
          imagens: true,
          estoques: true,
        }
      }
    },
    take: itemsPorPag,
    skip: offset,
    orderBy: {
      nomeProduto: "asc"
    }
  });

  const count = await prisma.produto.count({
    where: filtro
  });

  const totalPages = Math.ceil(count / itemsPorPag); 

  return { produtos, count, totalPages };
}