"use server"

import prisma from "@/src/lib/db"
import { obterUsuario } from "@/actions/logado/action"

export async function cadastrarEndereco(formData: FormData) {
  const usuarioApi = await obterUsuario();
  const idDoUsuario = usuarioApi?.user?.id || usuarioApi?.id;

  if (!idDoUsuario) {
    return { erro: "Você precisa estar logado para cadastrar um endereço." };
  }

  try {
    const rua = formData.get("rua") as string;
    const bairro = formData.get("bairro") as string;
    const numero = formData.get("numero") as string;
    const complemento = formData.get("complemento") as string;
    const cidade = formData.get("cidade") as string;
    const estado = formData.get("estado") as string;
    const cep = formData.get("cep") as string;

    if (!rua || !bairro || !numero || !cidade || !estado || !cep) {
      return { erro: "Preencha todos os campos obrigatórios." };
    }

    const dadosEndereco = {
      rua,
      bairro,
      numero,
      complemento: complemento || "",
      cidade,
      estado,
      cep
    };

    const usuarioExiste = await prisma.usuario.findUnique({
      where: { id: Number(idDoUsuario) },
      include: { endereco: true }
    });

    if (!usuarioExiste) {
      const nomeAPI = usuarioApi?.user?.name || usuarioApi?.name || "Usuário da Loja";
      const emailAPI = usuarioApi?.user?.email || usuarioApi?.email || "email@api.com";

      await prisma.usuario.create({
        data: {
          id: Number(idDoUsuario),
          nome: nomeAPI,
          email: emailAPI,
          senha: "CONTA_GERENCIADA_PELA_API",
          endereco: {
            create: dadosEndereco
          }
        }
      });
    } else {
      if (usuarioExiste.endereco) {
        await prisma.endereco.update({
          where: { id: usuarioExiste.endereco.id },
          data: dadosEndereco
        });
      } else {
        await prisma.usuario.update({
          where: { id: Number(idDoUsuario) },
          data: {
            endereco: {
              create: dadosEndereco
            }
          }
        });
      }
    }

    return { sucesso: true };
  } catch (error) {
    console.error("Erro no cadastro de endereço:", error);
    return { erro: "Erro ao salvar o endereço no banco de dados." };
  }
}