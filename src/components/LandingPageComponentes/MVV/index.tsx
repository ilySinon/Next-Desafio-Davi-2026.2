import { CardMVV } from "../../Cards";

export default function MVVLandingPage() {
  return (
    <section className="w-full bg-[#11131a] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-white text-center lg:text-left items-center lg:items-start">
          <span className="font-inter text-xs text-gray-400 uppercase tracking-wider">O TRICOLOR</span>
          <h2 className="font-anton text-5xl lg:text-6xl leading-tight">ORGULHO DE<br />SER FLUMINENSE</h2>
          <p className="font-inter text-sm text-gray-300 max-w-md mt-2">
            Desde 21 de julho de 1902, o Fluminense escreve a história do futebol brasileiro. Esta loja é para quem carrega o pó de arroz no peito.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 mt-6 lg:mt-4">
          <CardMVV
            numero="01"
            nome="MISSÃO"
            descricao="Levar o tricolor a cada torcedor com produtos oficiais e qualidade digna do manto."
            cor="border-(--var-grenaCard) text-(--var-grenaCard)"
          />
          <CardMVV
            numero="02"
            nome="VISÃO"
            descricao="Ser a loja referência para a torcida mais tradicional do Brasil, dentro e fora do Rio."
            cor="border-(--var-brancoCard) text-(--var-brancoCard)"
          />
          <CardMVV
            numero="03"
            nome="VALORES"
            descricao="Tradição, orgulho, respeito e o amor incondicional pelas cores verde, branco e grená."
            cor="border-(--var-verdeCard) text-(--var-verdeCard)"
          />
        </div>
      </div>
    </section>
  );
}