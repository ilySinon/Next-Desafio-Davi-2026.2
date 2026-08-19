import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Titulo } from '../../Titulos'
import { CardCategoria } from "../../Cards";

export default function CategoriasLandingPage() {
  return (
    <section className="w-full bg-(--var-Creme) py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 lg:gap-0">
          <Titulo texto="CATEGORIAS" />
          <Link href="/categorias" className="flex items-center gap-2 font-inter text-xs font-bold text-black hover:text-gray-600 transition-colors">
            Ver tudo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="flex flex-wrap -m-2">
          <CardCategoria
            numero="01"
            nome="CAMISAS"
            href="/categorias/camisas"
            corFundo="bg-(--var-verdeCard)"
            corTexto="text-white"
          />
          <CardCategoria
            numero="02"
            nome="MANGA LONGA"
            href="/categorias/manga-longa"
            corFundo="bg-(--var-verdeCard)"
            corTexto="text-white"
          />
          <CardCategoria
            numero="03"
            nome="MOLETONS"
            href="/categorias/moletons"
            corFundo="bg-(--var-brancoCard)"
            corTexto="text-black"
          />
          <CardCategoria
            numero="04"
            nome="CALÇAS"
            href="/categorias/calcas"
            corFundo="bg-(--var-brancoCard)"
            corTexto="text-black"
          />
          <CardCategoria
            numero="05"
            nome="BERMUDAS"
            href="/categorias/bermudas"
            corFundo="bg-(--var-grenaCard)"
            corTexto="text-white"
          />
          <CardCategoria
            numero="06"
            nome="BONÉS"
            href="/categorias/bones"
            corFundo="bg-(--var-grenaCard)"
            corTexto="text-white"
          />
        </div>
      </div>
    </section>
  );
}