"use server"

import prisma from "@/src/lib/db"
import { revalidatePath } from "next/cache"
import crypto from "crypto"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"

export default async function criarProduto(formData: FormData) {
  const nomeProduto = formData.get("nomeProduto") as string;
  const produtoDescricao = formData.get("produtoDescricao") as string;
  const idCategoriaProduto = Number(formData.get("idCategoriaProduto"));
  const preco = Number(formData.get("preco"));
  const nomeCor = formData.get("nomeCor") as string;
  const nomeGenero = formData.get("nomeGenero") as string;
  const idTamanho = Number(formData.get("idTamanho"));
  const quantidade = Number(formData.get("quantidade"));

  if (!nomeProduto || !produtoDescricao || !idCategoriaProduto || !preco || !nomeCor || !nomeGenero || !idTamanho || !quantidade) {
    return { erro: "Todos os campos de texto são obrigatórios." };
  }

  const imagensUnicas = [];
  const uploadDir = join(process.cwd(), "public/uploads");

  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error) {
  }
  
  for (let i = 0; i < 3; i++) {
    const file = formData.get(`imagem-${i}`) as File;
    
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const extensao = file.name.split('.').pop();
      const nomeUnico = `${crypto.randomUUID()}.${extensao}`;
      const caminhoSalvar = join(uploadDir, nomeUnico);
      
      await writeFile(caminhoSalvar, buffer);
      
      imagensUnicas.push({ nomeImagem: `/uploads/${nomeUnico}` });
    }
  }

  if (imagensUnicas.length === 0) {
    return { erro: "É necessário enviar pelo menos uma imagem." };
  }

  try {
    await prisma.produto.create({
      data: {
        nomeProduto,
        produtoDescricao,
        idCategoriaProduto,
        variacoes: {
          create: {
            nomeCor,
            nomeGenero,
            preco,
            imagens: {
              create: imagensUnicas
            },
            estoques: {
              create: {
                idTamanho,
                quantidade
              }
            }
          }
        }
      }
    });

    revalidatePath("/admin/produtos");
    return { sucesso: true };
  } catch (error) {
    return { erro: "Ocorreu um erro interno ao salvar o produto." };
  }
}