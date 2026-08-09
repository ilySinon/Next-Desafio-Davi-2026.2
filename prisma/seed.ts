import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.usuario.upsert({
    where: { email: 'admin@tricolor.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@tricolor.com',
      senha: 'senha-criptografada-aqui',
      imagemPerfil: 'ainda vou colocar as imagens',
      endereco: {
        create: {
          rua: 'Rua Álvaro Chaves',
          bairro: 'Laranjeiras',
          numero: '41',
          cidade: 'Rio de Janeiro',
          estado: 'RJ',
          cep: '22231-200'
        }
      }
    },
  });

  await prisma.tamanho.deleteMany();
  
  const tamanhoP = await prisma.tamanho.create({ data: { nomeTamanho: 'P', ordemTamanhos: 1 } });
  const tamanhoM = await prisma.tamanho.create({ data: { nomeTamanho: 'M', ordemTamanhos: 2 } });
  const tamanhoG = await prisma.tamanho.create({ data: { nomeTamanho: 'G', ordemTamanhos: 3 } });

  const categoriaCamisas = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Camisas de Jogo',
      descricaoCategoria: 'Camisas oficiais do Fluminense',
      imagemCategoria: 'ainda vou colocar as imagens'
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Camisa Oficial Fluminense 2024',
      produtoDescricao: 'Camisa oficial tricolor, tecido respirável e super confortável.',
      idCategoriaProduto: categoriaCamisas.id,
      variacoes: {
        create: {
          nomeCor: 'Tricolor (Verde, Branco e Grená)',
          nomeGenero: 'Masculino',
          preco: 349.90,
          precoVenda: 299.90,
          codigoProduto: 19022024,
          imagens: {
            create: [
              { nomeImagem: 'ainda vou colocar as imagens' },
              { nomeImagem: 'ainda vou colocar as imagens' }
            ]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 15 },
              { idTamanho: tamanhoM.id, quantidade: 30 },
              { idTamanho: tamanhoG.id, quantidade: 10 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Casaco de Frio Fluminense',
      produtoDescricao: 'Casaco corta-vento na cor grená.',
      idCategoriaProduto: categoriaCamisas.id,
      variacoes: {
        create: {
          nomeCor: 'Grená',
          nomeGenero: 'Unissex',
          preco: 250.00,
          imagens: {
            create: [{ nomeImagem: 'ainda vou colocar as imagens' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 5 },
              { idTamanho: tamanhoG.id, quantidade: 2 }
            ]
          }
        }
      }
    }
  });
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });