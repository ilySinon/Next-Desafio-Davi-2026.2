"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function adicionarItemCarrinho(idEstoque: number, quantidadeDesejada: number = 1) {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return { erro: "Você precisa estar logado para adicionar ao carrinho." };
  }

  try {
    let usuarioExiste = await prisma.usuario.findUnique({
      where: { id: Number(idDoUsuario) }
    });

    if (!usuarioExiste) {
      const nomeAPI = usuarioApi?.user?.name || usuarioApi?.name || "Usuário da Loja";
      const emailAPI = usuarioApi?.user?.email || usuarioApi?.email || "email@api.com";

      usuarioExiste = await prisma.usuario.create({
        data: {
          id: Number(idDoUsuario),
          nome: nomeAPI,
          email: emailAPI,
          senha: "CONTA_GERENCIADA_PELA_API"
        }
      });
    }

    const estoque = await prisma.estoque.findUnique({
      where: { id: idEstoque },
      include: {
        variacao: true
      }
    });

    if (!estoque) {
      return { erro: "Produto não encontrado." };
    }

    if (estoque.quantidade < quantidadeDesejada) {
      return { erro: "Quantidade indisponível no estoque." };
    }

    let carrinho = await prisma.carrinho.findFirst({
      where: { idUsuario: Number(idDoUsuario) }
    });

    if (!carrinho) {
      carrinho = await prisma.carrinho.create({
        data: {
          idUsuario: Number(idDoUsuario),
          valorTotal: 0
        }
      });
    }

    const itemExistente = await prisma.itemCarrinho.findFirst({
      where: {
        idCarrinho: carrinho.id,
        idEstoque: idEstoque
      }
    });

    if (itemExistente) {
      await prisma.itemCarrinho.update({
        where: { id: itemExistente.id },
        data: { quantidade: itemExistente.quantidade + quantidadeDesejada }
      });
    } else {
      await prisma.itemCarrinho.create({
        data: {
          idCarrinho: carrinho.id,
          idEstoque: idEstoque,
          quantidade: quantidadeDesejada
        }
      });
    }

    const todosOsItens = await prisma.itemCarrinho.findMany({
      where: { idCarrinho: carrinho.id },
      include: {
        estoque: {
          include: {
            variacao: true
          }
        }
      }
    });

    const novoValorTotal = todosOsItens.reduce((total, item) => {
      const preco = item.estoque.variacao.precoVenda || item.estoque.variacao.preco;
      return total + (preco * item.quantidade);
    }, 0);

    await prisma.carrinho.update({
      where: { id: carrinho.id },
      data: { valorTotal: novoValorTotal }
    });

    return { sucesso: true };
  } catch (error) {
    console.error("ERRO NO PRISMA AO ADD CARRINHO:", error);
    return { erro: "Erro interno ao adicionar ao carrinho." };
  }
}