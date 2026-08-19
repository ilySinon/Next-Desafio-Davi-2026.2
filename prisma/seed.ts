import 'dotenv/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.usuario.upsert({
    where: { email: 'German@Cano.com' },
    update: {},
    create: {
      nome: 'GermanCano',
      email: 'German@Cano.com',
      senha: 'senha1234',
      imagemPerfil: '/basicas/ImagemPerfil.png',
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
      nomeCategoria: 'Camisas',
      descricaoCategoria: 'Camisas oficiais do Fluminense',
      imagemCategoria: '/basicas/Camisa1.png'
    }
  });

  const categoriaBermudas = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Bermudas',
      descricaoCategoria: 'Bermudas para treino e casual',
      imagemCategoria: '/basicas/Camisa3.png'
    }
  });

  const categoriaMangaLonga = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Manga Longa',
      descricaoCategoria: 'Camisas de manga longa',
      imagemCategoria: '/basicas/Camisa5.png'
    }
  });

  const categoriaBones = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Bonés',
      descricaoCategoria: 'Acessórios tricolores',
      imagemCategoria: '/basicas/Camisa7.png'
    }
  });

  const categoriaCalcas = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Calças',
      descricaoCategoria: 'Calças oficiais',
      imagemCategoria: '/basicas/Camisa9.png'
    }
  });

  const categoriaMoletons = await prisma.categoria.create({
    data: {
      nomeCategoria: 'Moletons',
      descricaoCategoria: 'Moletons e casacos de frio',
      imagemCategoria: '/basicas/Camisa11.png'
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Camisa 1',
      produtoDescricao: 'Camisa oficial tricolor.',
      idCategoriaProduto: categoriaCamisas.id,
      variacoes: {
        create: {
          nomeCor: 'Tricolor',
          nomeGenero: 'Masculino',
          preco: 349.90,
          precoVenda: 299.90,
          codigoProduto: 10001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa1.png' }]
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
      nomeProduto: 'Camisa 2',
      produtoDescricao: 'Camisa oficial verde.',
      idCategoriaProduto: categoriaCamisas.id,
      variacoes: {
        create: {
          nomeCor: 'Verde',
          nomeGenero: 'Masculino',
          preco: 250.00,
          codigoProduto: 10002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa2.png' }]
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

  await prisma.produto.create({
    data: {
      nomeProduto: 'Bermuda 1',
      produtoDescricao: 'Bermuda de treino grená.',
      idCategoriaProduto: categoriaBermudas.id,
      variacoes: {
        create: {
          nomeCor: 'Grená',
          nomeGenero: 'Unissex',
          preco: 150.00,
          codigoProduto: 20001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa3.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 20 },
              { idTamanho: tamanhoM.id, quantidade: 20 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Bermuda 2',
      produtoDescricao: 'Bermuda casual branca.',
      idCategoriaProduto: categoriaBermudas.id,
      variacoes: {
        create: {
          nomeCor: 'Branco',
          nomeGenero: 'Masculino',
          preco: 140.00,
          codigoProduto: 20002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa4.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 10 },
              { idTamanho: tamanhoG.id, quantidade: 15 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Manga Longa 1',
      produtoDescricao: 'Camisa manga longa tricolor.',
      idCategoriaProduto: categoriaMangaLonga.id,
      variacoes: {
        create: {
          nomeCor: 'Tricolor',
          nomeGenero: 'Masculino',
          preco: 310.00,
          codigoProduto: 30001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa5.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 5 },
              { idTamanho: tamanhoM.id, quantidade: 12 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Manga Longa 2',
      produtoDescricao: 'Camisa manga longa dourada.',
      idCategoriaProduto: categoriaMangaLonga.id,
      variacoes: {
        create: {
          nomeCor: 'Dourado',
          nomeGenero: 'Feminino',
          preco: 320.00,
          codigoProduto: 30002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa6.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 8 },
              { idTamanho: tamanhoG.id, quantidade: 4 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Boné 1',
      produtoDescricao: 'Boné clássico verde.',
      idCategoriaProduto: categoriaBones.id,
      variacoes: {
        create: {
          nomeCor: 'Verde',
          nomeGenero: 'Unissex',
          preco: 90.00,
          codigoProduto: 40001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa7.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 50 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Boné 2',
      produtoDescricao: 'Boné moderno grená.',
      idCategoriaProduto: categoriaBones.id,
      variacoes: {
        create: {
          nomeCor: 'Grená',
          nomeGenero: 'Unissex',
          preco: 95.00,
          codigoProduto: 40002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa8.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 35 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Calça 1',
      produtoDescricao: 'Calça de viagem branca.',
      idCategoriaProduto: categoriaCalcas.id,
      variacoes: {
        create: {
          nomeCor: 'Branco',
          nomeGenero: 'Masculino',
          preco: 200.00,
          codigoProduto: 50001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa9.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 10 },
              { idTamanho: tamanhoM.id, quantidade: 18 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Calça 2',
      produtoDescricao: 'Calça de moletom tricolor.',
      idCategoriaProduto: categoriaCalcas.id,
      variacoes: {
        create: {
          nomeCor: 'Tricolor',
          nomeGenero: 'Unissex',
          preco: 210.00,
          codigoProduto: 50002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa10.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 22 },
              { idTamanho: tamanhoG.id, quantidade: 14 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Moletom 1',
      produtoDescricao: 'Moletom com capuz grená.',
      idCategoriaProduto: categoriaMoletons.id,
      variacoes: {
        create: {
          nomeCor: 'Grená',
          nomeGenero: 'Unissex',
          preco: 350.00,
          codigoProduto: 60001,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa11.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoP.id, quantidade: 5 },
              { idTamanho: tamanhoM.id, quantidade: 8 },
              { idTamanho: tamanhoG.id, quantidade: 6 }
            ]
          }
        }
      }
    }
  });

  await prisma.produto.create({
    data: {
      nomeProduto: 'Moletom 2',
      produtoDescricao: 'Moletom gola careca verde.',
      idCategoriaProduto: categoriaMoletons.id,
      variacoes: {
        create: {
          nomeCor: 'Verde',
          nomeGenero: 'Masculino',
          preco: 340.00,
          codigoProduto: 60002,
          imagens: {
            create: [{ nomeImagem: '/basicas/Camisa12.png' }]
          },
          estoques: {
            create: [
              { idTamanho: tamanhoM.id, quantidade: 15 },
              { idTamanho: tamanhoG.id, quantidade: 12 }
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