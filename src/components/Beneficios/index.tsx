import { ElementType } from "react";

type BeneficioProps = {
  titulo: string;
  descricao: string;
  icone: ElementType;
  corFundoIcone: string;
  corIcone: string;
};

export default function Beneficio({ titulo, descricao, icone: Icon, corFundoIcone, corIcone }: BeneficioProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={`${corFundoIcone} ${corIcone} p-3 rounded-full flex items-center justify-center`}>
        <Icon size={24} />
      </div>
      <div className="flex flex-col">
        <span className="font-inter font-bold text-xs text-black">{titulo}</span>
        <span className="font-inter text-[10px] text-gray-500">{descricao}</span>
      </div>
    </div>
  );
}