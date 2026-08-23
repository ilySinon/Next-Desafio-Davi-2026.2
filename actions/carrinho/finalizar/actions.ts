"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function finalizarPedido() {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return { erro: "Usuário não autenticado." };
  }

  try {

    const usuarioDB = await prisma.usuario.findUnique({
      where: { id: Number(idDoUsuario) },
      include: { endereco: true }
    });

    if (!usuarioDB || !usuarioDB.endereco) {
      return { erro: "Você precisa cadastrar um endereço no seu perfil antes de finalizar o pedido." };
    }

    const carrinho = await prisma.carrinho.findFirst({
      where: { idUsuario: Number(idDoUsuario) },
      include: {
        itens: {
          include: {
            estoque: {
              include: {
                variacao: true
              }
            }
          }
        }
      }
    });

    if (!carrinho || carrinho.itens.length === 0) {
      return { erro: "Seu carrinho está vazio." };
    }


    const resultado = await prisma.$transaction(async (tx) => {

      const novoPedido = await tx.pedido.create({
        data: {
          idUsuario: Number(idDoUsuario),
          idEndereco: usuarioDB.endereco!.id,
          valorTotal: carrinho.valorTotal,
          status: "PENDENTE",
          itens: {
            create: carrinho.itens.map((item) => {
              const precoUnitario = item.estoque.variacao.precoVenda || item.estoque.variacao.preco;
              return {
                idEstoque: item.idEstoque,
                quantidadePedido: item.quantidade,
                valorPedido: precoUnitario * item.quantidade
              };
            })
          }
        }
      });

      await tx.itemCarrinho.deleteMany({
        where: { idCarrinho: carrinho.id }
      });

      await tx.carrinho.update({
        where: { id: carrinho.id },
        data: { valorTotal: 0 }
      });

      return novoPedido;
    });

    return { sucesso: true, idPedido: resultado.id };
  } catch (error) {
    console.error("Erro ao finalizar pedido:", error);
    return { erro: "Erro ao processar o pedido. Tente novamente." };
  }
}