"use server"

import prisma from "@/src/lib/db"

async function atualizarItem(idCarrinho: number) {
  const itens = await prisma.itemCarrinho.findMany({
    where: { idCarrinho },
    include: {
      estoque: {
        include: {
          variacao: true
        }
      }
    }
  });

  const novoTotal = itens.reduce((total, item) => {
    const preco = item.estoque.variacao.precoVenda || item.estoque.variacao.preco;
    return total + (preco * item.quantidade);
  }, 0);

  await prisma.carrinho.update({
    where: { id: idCarrinho },
    data: { valorTotal: novoTotal }
  });
}

export async function atualizarQuantidadeItem(idItem: number, novaQuantidade: number) {
  if (novaQuantidade < 1) {
    return { erro: "Quantidade não pode ser menor que 1" };
  }

  try {
    const itemAtual = await prisma.itemCarrinho.findUnique({
      where: { id: idItem }
    });

    if (!itemAtual) {
      return { erro: "Item não encontrado" };
    }

    await prisma.itemCarrinho.update({
      where: { id: idItem },
      data: { quantidade: novaQuantidade }
    });

    await atualizarItem(itemAtual.idCarrinho);

    return { sucesso: true };
  } catch (error) {
    return { erro: "Erro ao atualizar quantidade no banco." };
  }
}

export async function removerItemCarrinho(idItem: number) {
  try {
    const item = await prisma.itemCarrinho.findUnique({
      where: { id: idItem }
    });

    if (!item) {
      return { erro: "Item não encontrado" };
    }

    await prisma.itemCarrinho.delete({
      where: { id: idItem }
    });

    await atualizarItem(item.idCarrinho);

    return { sucesso: true };
  } catch (error) {
    return { erro: "Erro ao remover item do banco." };
  }
}