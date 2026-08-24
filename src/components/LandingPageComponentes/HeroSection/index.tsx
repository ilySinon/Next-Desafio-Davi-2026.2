import { ArrowRight } from "lucide-react";
import { Botao, BotaoComIcone } from "../../botoes/index";
import { CardGrande } from "../../Cards";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-linear-to-r from-(--var-grenaGradiante) via-(--var-pretoGradiante) to-(--var-verdeGradiante) pt-30 lg:pt-25 flex items-center justify-center px-6 lg:px-12 pb-12 lg:pb-0">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 lg:gap-8 items-center">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-white text-center lg:text-left items-center lg:items-start">
          <span className="font-inter text-sm tracking-widest uppercase">
            COLEÇÃO 2026'
          </span>
          <h1 className="text-6xl lg:text-8xl leading-[0.9] text-white font-anton">
            VISTA O<br />
            MANTO<br />
            <span className="text-[#91E3AE]">TRICOLOR</span>
          </h1>
          <p className="font-inter text-sm text-gray-300 max-w-md">
            Camisas, moletons e acessórios oficiais do Fluminense Football Club. Do Maracanã pro seu guarda-roupa - verde, branco e grená.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full lg:w-auto">
            <BotaoComIcone
              texto="COMPRAR AGORA"
              href="/categorias"
              cor="bg-(--var-Creme) text-black hover:bg-gray-200"
              icone={ArrowRight}
            />
          </div>
        </div>

        <CardGrande
          nome="Produto em Destaque"
          categoria="Lorem Ipsum Dolor"
          preco="R$ 000,00"
          imagem="/basicas/Teste.png"
          href="/categorias/exemplo"
        />
      </div>
    </section>
  );
}