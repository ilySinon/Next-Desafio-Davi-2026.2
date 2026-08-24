"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Titulo } from "../../../components/Titulos";
import { BotaoComIcone } from "../../../components/botoes";
import { CardCarrinho } from "../../../components/Cards"; 
import { obterCarrinho } from "@/actions/carrinho/itemsCarrinho/actions";
import { atualizarQuantidadeItem, removerItemCarrinho } from "../../../../actions/carrinho/atualizarItem/actions";
import { finalizarPedido } from "../../../../actions/carrinho/finalizar/actions";

export function AreaCarrinho() {
  const [carrinho, setCarrinho] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);
  const router = useRouter();

  useEffect(() => {
    carregarCarrinho();
  }, []);

  async function carregarCarrinho() {
    setCarregando(true);
    const dados = await obterCarrinho();
    setCarrinho(dados);
    setCarregando(false);
  }

  const handleIncrementar = async (idItem: number) => {
    const itemAtual = carrinho.itens.find((i: any) => i.id === idItem);
    if (itemAtual) {
      const resposta = await atualizarQuantidadeItem(idItem, itemAtual.quantidade + 1);
      if (resposta.sucesso) {
        await carregarCarrinho();
      }
    }
  };

  const handleDecrementar = async (idItem: number) => {
    const itemAtual = carrinho.itens.find((i: any) => i.id === idItem);
    if (itemAtual && itemAtual.quantidade > 1) {
      const resposta = await atualizarQuantidadeItem(idItem, itemAtual.quantidade - 1);
      if (resposta.sucesso) {
        await carregarCarrinho();
      }
    }
  };

  const handleRemover = async (idItem: number) => {
    const confirmacao = window.confirm("Tem certeza que deseja remover este item?");
    if (confirmacao) {
      const resposta = await removerItemCarrinho(idItem);
      if (resposta.sucesso) {
        await carregarCarrinho();
      }
    }
  };

  const handleFinalizarPedido = async () => {
    const resposta = await finalizarPedido();

    if (resposta.erro) {
      alert(resposta.erro);
    } else {
      alert("Pedido realizado com sucesso!");
      router.push("/perfil/pedidos");
    }
  };

  if (carregando && !carrinho) {
    return (
      <main className="w-full flex justify-center items-center bg-(--var-Creme) min-h-screen">
        <span className="font-inter font-bold text-gray-500 animate-pulse">Carregando carrinho...</span>
      </main>
    );
  }

  const itens = carrinho?.itens || [];

  return (
    <main className="w-full flex flex-col items-center bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="w-full max-w-6xl">
        {itens.length === 0 ? (
          <div className="w-full max-w-4xl mx-auto bg-[#EAE5DD] border border-[#D5D0C8] rounded-4xl p-10 lg:p-20 flex flex-col items-center justify-center text-center shadow-sm mt-8">
            <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-(--var-grenaCard) flex items-center justify-center mb-6">
              <ShoppingBag size={24} className="text-white" />
            </div>

            <Titulo texto="SEU CARRINHO ESTÁ VAZIO" />

            <p className="text-gray-600 font-inter text-sm lg:text-base max-w-md mb-8 mt-4 leading-relaxed">
              Escolha um manto, moletom ou outra peça e volte aqui para fechar o pedido.
            </p>

            <BotaoComIcone 
              texto="VER PRODUTOS" 
              href="/categorias" 
              cor="bg-(--var-grenaCard) text-white hover:opacity-90" 
              icone={ShoppingBag} 
            />
          </div>
        ) : (
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-8">
            <div className="flex justify-center mb-4">
              <Titulo texto="MEU CARRINHO" />
            </div>

            <div className="flex flex-col gap-4">
              {itens.map((item: any) => {
                const variacao = item.estoque.variacao;
                const produto = variacao.produto;
                const imagem = variacao.imagens?.[0]?.nomeImagem || "/basicas/Teste.png";
                const preco = variacao.precoVenda || variacao.preco;

                return (
                  <CardCarrinho
                    key={item.id}
                    idItem={item.id}
                    imagem={imagem}
                    nomeProduto={`${produto.nomeProduto} - ${variacao.nomeCor}`}
                    tamanho={item.estoque.tamanho.nomeTamanho}
                    preco={preco}
                    quantidade={item.quantidade}
                    onIncrementar={handleIncrementar}
                    onDecrementar={handleDecrementar}
                    onRemover={handleRemover}
                  />
                );
              })}
            </div>

            <div className="w-full bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex justify-between items-center mt-4">
              <span className="font-inter text-gray-500 font-bold text-sm lg:text-base">TOTAL DA COMPRA:</span>
              <span className="font-anton text-2xl lg:text-3xl text-[#7a1226]">
                {carrinho.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>

            <div className="flex justify-end mt-2">
              <button 
                onClick={handleFinalizarPedido}
                className="bg-[#7a1226] hover:bg-[#5a0d1c] text-white font-inter font-bold text-sm px-10 py-4 rounded-full transition-colors shadow-lg cursor-pointer"
              >
                FINALIZAR PEDIDO
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}