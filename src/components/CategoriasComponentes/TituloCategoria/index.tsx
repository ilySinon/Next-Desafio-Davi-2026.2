type TituloCategoriaProps = {
  texto: string;
};

export function TituloCategoria({ texto }: TituloCategoriaProps) {
  return (
    <h2 className="font-anton text-4xl lg:text-5xl text-black mb-8 uppercase">
      {texto}
    </h2>
  );
}