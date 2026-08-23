import { Prisma } from '@prisma/client';

export type Produto = Prisma.ProdutoGetPayload<{
  include: {
    categoria: true;
    variacoes: {
      include: {
        imagens: true;
        estoques: true;
      };
    };
  };
}>;

export type Usuario = Prisma.UsuarioGetPayload<{
  include: {
    endereco: true;
  };
}>;