"use server"

import prisma from "@/src/lib/db"
import { revalidatePath } from "next/cache"
import crypto from "crypto"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"

export async function getProdutoEditar(idProduto: number) {
  const produtoEditar = await prisma.produto.findUnique({
    where: {
      id: idProduto,
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
  });

  return produtoEditar;
}

export async function editarProduto(formData: FormData) {
  const idProduto = Number(formData.get("idProduto"));
  const nomeProduto = formData.get("nomeProduto") as string;
  const produtoDescricao = formData.get("produtoDescricao") as string;
  const idCategoriaProduto = Number(formData.get("idCategoriaProduto"));
  const preco = Number(formData.get("preco"));
  const nomeCor = formData.get("nomeCor") as string;
  const nomeGenero = formData.get("nomeGenero") as string;
  const idTamanho = Number(formData.get("idTamanho"));
  const quantidade = Number(formData.get("quantidade"));

  if (!idProduto || !nomeProduto || !produtoDescricao || !idCategoriaProduto || !preco || !nomeCor || !nomeGenero || !idTamanho || !quantidade) {
    return { erro: "Todos os campos de texto são obrigatórios." };
  }

  try {
    const produtoAtual = await prisma.produto.findUnique({
      where: { id: idProduto },
      include: {
        variacoes: {
          include: {
            estoques: true,
            imagens: true
          }
        }
      }
    });

    if (!produtoAtual || produtoAtual.variacoes.length === 0) {
      return { erro: "Produto ou variação não encontrados." };
    }

    const idVariacao = produtoAtual.variacoes[0].id;
    const idEstoque = produtoAtual.variacoes[0].estoques[0].id;

    const uploadDir = join(process.cwd(), "public/uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {}

    for (let i = 0; i < 3; i++) {
      const file = formData.get(`imagem-${i}`) as File;
      
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const extensao = file.name.split('.').pop();
        const nomeUnico = `${crypto.randomUUID()}.${extensao}`;
        const caminhoSalvar = join(uploadDir, nomeUnico);
        
        await writeFile(caminhoSalvar, buffer);
        
        const imagemAntiga = produtoAtual.variacoes[0].imagens[i];

        if (imagemAntiga) {
          await prisma.imagemProduto.update({
            where: { id: imagemAntiga.id },
            data: { nomeImagem: `/uploads/${nomeUnico}` }
          });
        } else {
          await prisma.imagemProduto.create({
            data: {
              idItemProduto: idVariacao,
              nomeImagem: `/uploads/${nomeUnico}`
            }
          });
        }
      }
    }

    await prisma.produto.update({
      where: { id: idProduto },
      data: {
        nomeProduto,
        produtoDescricao,
        idCategoriaProduto,
        variacoes: {
          update: {
            where: { id: idVariacao },
            data: {
              nomeCor,
              nomeGenero,
              preco,
              estoques: {
                update: {
                  where: { id: idEstoque },
                  data: {
                    idTamanho,
                    quantidade
                  }
                }
              }
            }
          }
        }
      }
    });

    revalidatePath("/admin/produtos");
    return { sucesso: true };
  } catch (error) {
    return { erro: "Ocorreu um erro interno ao atualizar o produto." };
  }
}