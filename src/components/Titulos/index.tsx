import { ElementType } from "react";

type TituloProps = {
  texto: string;
};

export function Titulo({ texto }: TituloProps) {
  return (
    <h2 className="font-anton text-5xl lg:text-6xl text-black uppercase leading-tight">
      {texto}
    </h2>
  );
}

export function TituloSecao({ texto }: TituloProps) {
  return (
    <h1 className="text-5xl lg:text-7xl text-white font-anton uppercase mb-4 leading-tight">
      {texto}
    </h1>
  );
}

type MiniTituloProps = {
  texto: string;
  icone: ElementType;
};

export function MiniTitulo({ texto, icone: Icon }: MiniTituloProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 bg-(--var-grenaCard) text-white rounded-full">
        <Icon size={24} />
      </div>
      <h3 className="font-anton text-2xl lg:text-3xl text-black uppercase">{texto}</h3>
    </div>
  );
}