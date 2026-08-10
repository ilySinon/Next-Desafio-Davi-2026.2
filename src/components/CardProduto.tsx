interface CardProdutoPropiedades {
  nome: string;
  preco: string;
  categoria: string;
}

export default function CardProduto({ nome, preco, categoria }: CardProdutoPropiedades) {
  return (
    <div className="flex flex-col gap-3 group cursor-pointer">
      <div className="w-full h-[250px] lg:h-[350px] bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 transition-transform group-hover:scale-105">
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-1 lg:gap-0">
        <div className="flex flex-col">
          <span className="font-inter text-[10px] text-gray-500 uppercase">{categoria}</span>
          <span className="font-inter font-bold text-sm text-black">{nome}</span>
        </div>
        <span className="text-base lg:text-lg text-black font-medium">{preco}</span>
      </div>
    </div>
  );
}