import { TituloCarrinho } from "../../../components/CarrinhoComponentes/TituloCarrinho";
import { AreaCarrinho } from "../../../components/CarrinhoComponentes/AreaCarrinho";

export default function Carrinho() {
  return (
    <main className="w-full flex flex-col items-center bg-(--var-Creme) min-h-screen pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
      <div className="w-full max-w-6xl">
        <TituloCarrinho texto="CARRINHO TRICOLOR"/>
        <AreaCarrinho />
      </div>
    </main>
  );
}