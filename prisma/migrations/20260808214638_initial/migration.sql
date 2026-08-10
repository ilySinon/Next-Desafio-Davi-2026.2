-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagemPerfil" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nomeCategoria" TEXT NOT NULL,
    "imagemCategoria" TEXT,
    "descricaoCategoria" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "produtoDescricao" TEXT NOT NULL,
    "idCategoriaProduto" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "comentario" TEXT,
    "nota" INTEGER NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VariacaoProduto" (
    "id" SERIAL NOT NULL,
    "nomeCor" TEXT NOT NULL,
    "idProduto" INTEGER NOT NULL,
    "nomeGenero" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "precoVenda" DOUBLE PRECISION,
    "codigoProduto" INTEGER,

    CONSTRAINT "VariacaoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImagemProduto" (
    "id" TEXT NOT NULL,
    "idItemProduto" INTEGER NOT NULL,
    "nomeImagem" TEXT NOT NULL,

    CONSTRAINT "ImagemProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tamanho" (
    "id" SERIAL NOT NULL,
    "nomeTamanho" TEXT NOT NULL,
    "ordemTamanhos" INTEGER NOT NULL,

    CONSTRAINT "Tamanho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" SERIAL NOT NULL,
    "idItem" INTEGER NOT NULL,
    "idTamanho" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCarrinho" (
    "id" SERIAL NOT NULL,
    "idEstoque" INTEGER NOT NULL,
    "idCarrinho" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "ItemCarrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "dataCompra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idEndereco" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" SERIAL NOT NULL,
    "idEstoque" INTEGER NOT NULL,
    "idPedido" INTEGER NOT NULL,
    "quantidadePedido" INTEGER NOT NULL,
    "valorPedido" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_idUsuario_key" ON "Endereco"("idUsuario");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idCategoriaProduto_fkey" FOREIGN KEY ("idCategoriaProduto") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VariacaoProduto" ADD CONSTRAINT "VariacaoProduto_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImagemProduto" ADD CONSTRAINT "ImagemProduto_idItemProduto_fkey" FOREIGN KEY ("idItemProduto") REFERENCES "VariacaoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_idItem_fkey" FOREIGN KEY ("idItem") REFERENCES "VariacaoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_idTamanho_fkey" FOREIGN KEY ("idTamanho") REFERENCES "Tamanho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCarrinho" ADD CONSTRAINT "ItemCarrinho_idEstoque_fkey" FOREIGN KEY ("idEstoque") REFERENCES "Estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCarrinho" ADD CONSTRAINT "ItemCarrinho_idCarrinho_fkey" FOREIGN KEY ("idCarrinho") REFERENCES "Carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idEndereco_fkey" FOREIGN KEY ("idEndereco") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_idEstoque_fkey" FOREIGN KEY ("idEstoque") REFERENCES "Estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
