import { TituloSecao } from "../../Titulos";

export default function HeroSectionContato() {
  return (
    <div className="w-full flex flex-col items-center bg-linear-to-r from-[#65001A] via-[#00100C] to-[#004C23] pt-45 pb-24 px-6 lg:px-12 text-center">
      <TituloSecao texto="VAMOS CONVERSAR SOBRE O SEU MANTO?" />
      <p className="font-inter text-gray-300 mt-2 text-sm">
        Dúvidas sobre pedidos, tamanhos ou personalização - estamos prontos para atender a<br /> <br className="hidden lg:block" />
        Nação <span className="font-bold text-white">Tricolor</span>.
      </p>
    </div>
  );
}