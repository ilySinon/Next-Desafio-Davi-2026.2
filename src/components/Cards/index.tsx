import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Plus, Minus, Trash2 } from "lucide-react";
import { Produto } from "@/types/data";

export function CardGrande() {
  return (
    <div className="w-full lg:w-1/2 h-87.5 lg:h-125 rounded-xl flex items-center justify-center p-8 relative overflow-hidden group cursor-pointer">
      <Image
        src="/basicas/Teste.png"
        alt="Produto Destaque"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
      
      <div className="absolute bottom-6 left-6 flex flex-col text-white z-20">
        <span className="font-inter text-xs uppercase bg-(--var-grenaCard) px-3 py-1 rounded-full w-fit mb-2">Novo Lançamento</span>
        <span className="font-inter font-bold text-xl lg:text-3xl">Camisa III 2026 - CASA</span>
      </div>
      <div className="absolute bottom-6 right-6 text-xl lg:text-3xl font-bold text-white z-20">
        R$ 349,90
      </div>
    </div>
  );
}

type CardProps = {
  produto: Produto;
};

export function CardNormal({ produto }: CardProps) {
  const imagem = produto.variacoes?.[0]?.imagens?.[0]?.nomeImagem || '/basicas/Teste.png';
  const preco = produto.variacoes?.[0]?.precoVenda || produto.variacoes?.[0]?.preco || 0;
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <Link href={`/produto/${produto.id}`} className="flex flex-col gap-3 group cursor-pointer">
      <div className="w-full h-62.5 lg:h-87.5 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105 relative overflow-hidden">
        <Image
          src={imagem}
          alt={produto.nomeProduto}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-1 lg:gap-0">
        <div className="flex flex-col">
          <span className="font-inter text-[10px] text-gray-500 uppercase">{produto.categoria?.nomeCategoria}</span>
          <span className="font-inter font-bold text-sm text-black">{produto.nomeProduto}</span>
        </div>
        <span className="text-base lg:text-lg text-black font-medium">{precoFormatado}</span>
      </div>
    </Link>
  );
}

type CardCategoriaProps = {
  numero: string;
  nome: string;
  href: string;
  corFundo: string;
  corTexto: string;
};

export function CardCategoria({ numero, nome, href, corFundo, corTexto }: CardCategoriaProps) {
  return (
    <Link href={href} className="w-1/2 lg:w-1/6 p-2 block group">
      <div className={`${corFundo} ${corTexto} rounded-lg p-6 lg:p-4 flex flex-col justify-between transition-transform group-hover:-translate-y-2 h-37.5 lg:h-75`}>
        <span className="text-2xl flex justify-center font-bold">{numero}</span>
        <div className="flex flex-col">
          <span className="font-inter text-[10px] uppercase flex justify-center font-medium">Coleção</span>
          <span className="text-xl tracking-wide flex justify-center text-center font-anton uppercase">{nome}</span>
        </div>
      </div>
    </Link>
  );
}

type CardMVVProps = {
  numero: string;
  nome: string;
  descricao: string;
  cor: string;
};

export function CardMVV({ numero, nome, descricao, cor }: CardMVVProps) {
  return (
    <div className={`w-full lg:w-1/3 flex flex-col gap-3 border-l-4 lg:border-l-2 pl-6 bg-[#1A2231] px-8 py-8 lg:py-6 ${cor}`}>
      <span className="font-anton text-3xl">{numero}</span>
      <h3 className="font-anton text-2xl text-white">{nome}</h3>
      <p className="font-inter text-xs text-gray-400">
        {descricao}
      </p>
    </div>
  );
}

type CardRedirecionamentoProps = {
  titulo: string;
  subtitulo: string;
  href: string;
  target?: string;
};

export function CardRedirecionamento({ titulo, subtitulo, href, target = "_blank" }: CardRedirecionamentoProps) {
  return (
    <Link href={href} target={target} className="w-full bg-(--var-Creme) rounded-lg p-4 flex items-center justify-between group hover:bg-[#e8e7e1] transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="font-inter font-bold text-sm text-black">{titulo}</span>
          <span className="font-inter text-xs text-gray-500">{subtitulo}</span>
        </div>
      </div>
      <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
    </Link>
  );
}

type CardProdutoProps = {
  imagem: string;
  alt?: string;
};

export function CardProduto({ imagem, alt = "Imagem do produto" }: CardProdutoProps) {
  return (
    <div className="w-full aspect-4/5 bg-gray-200 rounded-3xl overflow-hidden relative">
      <Image 
        src={imagem} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover" 
      />
    </div>
  );
}

type CardProdutoMenorProps = {
  imagem: string;
  alt?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function CardProdutoMenor({ imagem, alt = "Miniatura do produto", isActive = false, onClick }: CardProdutoMenorProps) {
  return (
    <button 
      onClick={onClick}
      className={`w-full aspect-square relative rounded-2xl overflow-hidden transition-colors border-2 ${
        isActive 
          ? "border-black" 
          : "border-gray-200 hover:border-black"
      }`}
    >
      <Image 
        src={imagem} 
        alt={alt} 
        fill
        sizes="(max-width: 768px) 33vw, 15vw"
        className="object-cover" 
      />
    </button>
  );
}

type CardCarrinhoProps = {
  idItem: number;
  imagem: string;
  nomeProduto: string;
  tamanho: string;
  preco: number;
  quantidade: number;
  onIncrementar: (idItem: number) => void;
  onDecrementar: (idItem: number) => void;
  onRemover: (idItem: number) => void;
};

export function CardCarrinho({
  idItem,
  imagem,
  nomeProduto,
  tamanho,
  preco,
  quantidade,
  onIncrementar,
  onDecrementar,
  onRemover
}: CardCarrinhoProps) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className="w-full flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
        <Image
          src={imagem}
          alt={nomeProduto}
          fill
          sizes="(max-width: 768px) 100px, 150px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 py-1">
        <div className="flex justify-between items-start gap-2">
          <div className="flex flex-col">
            <span className="font-inter font-bold text-sm lg:text-base text-black line-clamp-2">
              {nomeProduto}
            </span>
            <span className="font-inter text-xs text-gray-500 mt-1 uppercase">
              Tamanho: {tamanho}
            </span>
          </div>
          
          <button 
            onClick={() => onRemover(idItem)}
            className="text-gray-400 hover:text-red-500 transition-colors shrink-0 p-1"
            title="Remover item"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="flex justify-between items-end mt-4">
          <div className="flex items-center bg-gray-100 rounded-full border border-gray-200">
            <button 
              onClick={() => onDecrementar(idItem)}
              className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-l-full transition-colors disabled:opacity-50"
              disabled={quantidade <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="font-inter font-bold text-sm text-black w-8 text-center select-none">
              {quantidade}
            </span>
            <button 
              onClick={() => onIncrementar(idItem)}
              className="p-2 text-gray-500 hover:text-black hover:bg-gray-200 rounded-r-full transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <span className="font-inter font-bold text-base lg:text-lg text-[#7a1226]">
            {precoFormatado}
          </span>
        </div>
      </div>
    </div>
  );
}