import { ShoppingBag } from "lucide-react";
import { Titulo } from "../../../components/Titulos";
import { BotaoComIcone } from "../../../components/botoes";

export function AreaCarrinho() {
  return (
    <main className="w-full flex flex-col items-center bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="w-full max-w-6xl">

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
      </div>
    </main>
  );
}