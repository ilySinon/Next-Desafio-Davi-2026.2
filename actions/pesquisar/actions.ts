"use server"

import prisma from "@/src/lib/db"

const itemsPorPag = 12;

export async function filtrarPesquisaProdutos(query: string, currentPage: number){

    const offset = (currentPage - 1) * itemsPorPag
    const produtos = await prisma.produto.findMany({
        where: {
            OR: [{nomeProduto: {contains: query, mode: "insensitive"}}]
        },
        include: {
        categoria: true,
        variacoes: {
            include: {
            imagens: true,
            estoques: true,
            }
        },
        },
        orderBy: {
            nomeProduto: "asc"
        },
        take: itemsPorPag,
        skip: offset
    });

    const count = await prisma.produto.count({
        where:{
            OR: [{nomeProduto: {contains: query, mode: "insensitive"}}]
        },
    });
    const totalPages = Math.ceil(count / itemsPorPag); 

    return { produtos, count, totalPages};
}