import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CardProduto, CardProdutoMenor } from "../../../../components/Cards";
import { ProdutoInfos } from "../../../../components/ProdutoComponentes/ProdutoInfos";
import BeneficiosProdutos from "../../../../components/ProdutoComponentes/beneficiosProdutos";
import ControlesProduto from "../../../../components/ProdutoComponentes/ControlesProduto";
import getProdutos from "@/actions/produtos/actions";

export default async function PaginaProduto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idNumber = parseInt(id, 10);
  const produto = await getProdutos(idNumber);

  if (!produto) {
    return (
      <main className="min-h-screen pt-32 flex justify-center">
        <h1 className="font-anton text-2xl">Produto não encontrado</h1>
      </main>
    );
  }

  const variacaoAtual = produto.variacoes[0];
  const imagens = variacaoAtual?.imagens || [];
  const imagemPrincipal = imagens[0]?.nomeImagem || "/basicas/Teste.png";

  const precoFormatado = variacaoAtual?.preco?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }) || "R$ 0,00";

  return (
    <main className="w-full bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <Link
          href="/"
          className="flex lg:hidden items-center gap-2 text-gray-600 hover:text-black font-inter text-xs font-bold mb-6 transition-colors uppercase w-fit"
        >
          VOLTAR <ArrowLeft size={16} />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-4">
            
            <CardProduto 
              imagem={imagemPrincipal} 
              alt={produto.nomeProduto} 
            />
            
            {imagens.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {imagens.slice(0, 3).map((img, index) => (
                  <CardProdutoMenor 
                    key={img.id || index} 
                    imagem={img.nomeImagem} 
                    isActive={index === 0}
                  />
                ))}
              </div>
            )}

          </div>

          <div className="flex flex-col pt-2 lg:pt-0">
            <ProdutoInfos 
              titulo={produto.nomeProduto}
              preco={precoFormatado}
              descricao={produto.produtoDescricao}
              hrefVoltar="/"
            />

            {variacaoAtual && (
              <ControlesProduto idVariacao={variacaoAtual.id} />
            )}

            <BeneficiosProdutos />
          </div>
        </div>
      </div>
    </main>
  );
}