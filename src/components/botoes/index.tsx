import Link from "next/link";
import { ElementType } from "react";

type BotaoProps = {
  texto: string;
  href: string;
  cor: string;
};

export function Botao({ texto, href, cor }: BotaoProps) {
  return (
    <Link
      href={href}
      className={`${cor} font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center transition-colors`}
    >
      {texto}
    </Link>
  );
}

type BotaoComIconeProps = BotaoProps & {
  icone: ElementType;
};

export function BotaoComIcone({ texto, href, cor, icone: Icon }: BotaoComIconeProps) {
  return (
    <Link
      href={href}
      className={`${cor} font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
    >
      {texto} <Icon size={16} />
    </Link>
  );
}

type BotaoSubmitProps = {
  texto: string;
  cor: string;
};

export function BotaoSubmit({ texto, cor }: BotaoSubmitProps) {
  return (
    <button
      type="submit"
      className={`${cor} font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center transition-colors`}
    >
      {texto}
    </button>
  );
}

type BotaoSubmitComIconeProps = BotaoSubmitProps & {
  icone: ElementType;
};

export function BotaoSubmitComIcone({ texto, cor, icone: Icon }: BotaoSubmitComIconeProps) {
  return (
    <button
      type="submit"
      className={`${cor} font-inter text-xs font-bold px-6 py-4 lg:py-3 rounded-full flex items-center justify-center gap-2 transition-colors`}
    >
      {texto} <Icon size={16} />
    </button>
  );
}

type BotaoCategoriaProps = {
  texto: string;
  href: string;
  ativo?: boolean;
};

export function BotaoCategoria({ texto, href, ativo = false }: BotaoCategoriaProps) {
  const estiloAtivo = ativo
    ? "border-[var(--var-grenaCard)] bg-[var(--var-grenaCard)] text-white"
    : "border-gray-300 bg-white text-black hover:bg-gray-100";

  return (
    <Link
      href={href}
      className={`px-6 py-2 rounded-full border font-inter text-[10px] font-bold uppercase transition-colors inline-flex items-center justify-center ${estiloAtivo}`}
    >
      {texto}
    </Link>
  );
}

type BotaoTamanhoProps = {
  texto: string;
  ativo?: boolean;
  onClick?: () => void;
};

export function BotaoTamanho({ texto, ativo = false, onClick }: BotaoTamanhoProps) {
  const estiloAtivo = ativo
    ? "border-black bg-black text-white"
    : "border-gray-300 bg-transparent text-black hover:border-black";

  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border flex items-center justify-center font-inter font-bold text-sm transition-all ${estiloAtivo}`}
    >
      {texto}
    </button>
  );
}