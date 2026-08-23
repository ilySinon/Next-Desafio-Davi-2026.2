"use server"

import prisma from "@/src/lib/db"

export async function obterTodasCategorias() {
  try {
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        nomeCategoria: 'asc'
      }
    });
    return categorias;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}