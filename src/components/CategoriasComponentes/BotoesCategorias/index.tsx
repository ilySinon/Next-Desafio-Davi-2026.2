import { BotaoCategoria } from "../../botoes";

type BotoesCategoriasProps = {
  categoriaAtiva?: string;
};

export default function BotoesCategorias({ categoriaAtiva = "todas" }: BotoesCategoriasProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 mb-12">
      <BotaoCategoria 
        texto="TODAS" 
        href="/categorias" 
        ativo={categoriaAtiva === "todas"} 
      />
      <BotaoCategoria 
        texto="CAMISAS" 
        href="/categorias/camisas" 
        ativo={categoriaAtiva === "camisas"} 
      />
      <BotaoCategoria 
        texto="MANGA LONGA" 
        href="/categorias/manga-longa" 
        ativo={categoriaAtiva === "manga-longa"} 
      />
      <BotaoCategoria 
        texto="MOLETONS" 
        href="/categorias/moletons" 
        ativo={categoriaAtiva === "moletons"} 
      />
      <BotaoCategoria 
        texto="CALÇAS" 
        href="/categorias/calcas" 
        ativo={categoriaAtiva === "calcas"} 
      />
      <BotaoCategoria 
        texto="BERMUDAS" 
        href="/categorias/bermudas" 
        ativo={categoriaAtiva === "bermudas"} 
      />
      <BotaoCategoria 
        texto="BONÉS" 
        href="/categorias/bones" 
        ativo={categoriaAtiva === "bones"} 
      />
    </div>
  );
}