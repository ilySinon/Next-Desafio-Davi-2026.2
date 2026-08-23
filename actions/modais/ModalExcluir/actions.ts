"use server"

import prisma from "@/src/lib/db"
import { revalidatePath } from "next/cache"

export async function excluirProduto(idProduto: number) {
  try {
    const produto = await prisma.produto.findUnique({
      where: { 
        id: idProduto 
    },
      include: {
        variacoes: true
      }
    });

    if (!produto) {
      return { erro: "Produto não encontrado." };
    }

    for (const variacao of produto.variacoes) {
      await prisma.imagemProduto.deleteMany({
        where: { idItemProduto: variacao.id }
      });

      await prisma.estoque.deleteMany({
        where: { idItem: variacao.id }
      });

      await prisma.variacaoProduto.delete({
        where: { id: variacao.id }
      });
    }

    await prisma.produto.delete({
      where: { id: idProduto },
    });

    revalidatePath("/admin/produtos");
    return { sucesso: true };

  } catch (error) {
    return { erro: "Ocorreu um erro ao excluir. O produto pode estar atrelado a um pedido existente." };
  }
}