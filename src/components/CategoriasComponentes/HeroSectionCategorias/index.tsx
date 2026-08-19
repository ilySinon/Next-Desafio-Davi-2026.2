import { TituloSecao } from "../../Titulos";

type HeroSectionCategoriaProps = {
  titulo: string;
  descricao: string;
};

export default function HeroSectionCategoria({ titulo, descricao }: HeroSectionCategoriaProps) {
  return (
    <section className="w-full bg-linear-to-r from-(--var-grenaGradiante) via-(--var-pretoGradiante) to-(--var-verdeGradiante) pt-32 pb-16 px-6 flex flex-col items-center justify-center text-center">
      <span className="text-white/80 font-inter text-xs tracking-widest uppercase mb-4">
        COLEÇÃO
      </span>
      
      <TituloSecao texto={titulo} />
      
      <p className="text-gray-300 font-inter text-sm max-w-md mb-8 mt-4">
        {descricao}
      </p>
    </section>
  );
}