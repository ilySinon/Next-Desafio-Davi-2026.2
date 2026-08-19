type TituloCarrinhoProps = {
  texto: string;
};

export function TituloCarrinho({ texto }: TituloCarrinhoProps) {
  return (
    <h2 className="font-anton text-6xl lg:text-7xl text-black text-center mb-8 uppercase">
      {texto}
    </h2>
  );
}