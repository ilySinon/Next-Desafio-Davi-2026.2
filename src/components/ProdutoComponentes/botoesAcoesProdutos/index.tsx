import { ShoppingBag } from "lucide-react";
import { Botao, BotaoComIcone } from "../../botoes";

export default function BotoesAcoes() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full">
      <BotaoComIcone
        texto="ADICIONAR AO CARRINHO"
        href="/carrinho"
        cor="bg-(--var-grenaCard) text-white flex-1 hover:opacity-90"
        icone={ShoppingBag}
      />
      
      <Botao
        texto="COMPRAR AGORA"
        href="/checkout"
        cor="border border-gray-300 bg-transparent text-black flex-1 hover:bg-gray-100 hover:border-black"
      />
    </div>
  );
}