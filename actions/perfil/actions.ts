"use server"

import prisma from "@/src/lib/db"
import { revalidatePath } from "next/cache"
import crypto from "crypto"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { obterUsuario } from "@/actions/logado/action"

export async function atualizarImagemPerfil(formData: FormData) {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return { erro: "Usuário não autenticado." };
  }

  const file = formData.get("imagem") as File;
  
  if (!file || file.size === 0) {
    return { erro: "Nenhuma imagem enviada." };
  }

  try {
    const uploadDir = join(process.cwd(), "public/uploads/perfis");
    await mkdir(uploadDir, { recursive: true }).catch(() => {});
    
    const buffer = Buffer.from(await file.arrayBuffer());
    const extensao = file.name.split('.').pop();
    const nomeUnico = `${crypto.randomUUID()}.${extensao}`;
    const caminhoSalvar = join(uploadDir, nomeUnico);
    
    await writeFile(caminhoSalvar, buffer);
    const urlImagem = `/uploads/perfis/${nomeUnico}`;

    await prisma.usuario.update({
      where: { id: Number(idDoUsuario) },
      data: { imagemPerfil: urlImagem }
    });

    revalidatePath("/perfil");
    return { sucesso: true, url: urlImagem };
  } catch (error) {
    return { erro: "Erro interno ao salvar a imagem." };
  }
}