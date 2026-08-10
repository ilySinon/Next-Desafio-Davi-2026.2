import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8F5EC] py-16 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between flex-wrap gap-8">
        
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/basicas/logo.png"
              alt="Logo Fluminense"
              width={40}
              height={40}
            />
            <div className="flex flex-col text-left">
              <span className="font-anton text-xl leading-none text-black">
                TRICOLOR
              </span>
              <span className="font-inter text-xs text-gray-800">
                LOJA - DESDE 1902
              </span>
            </div>
          </div>
          <p className="font-inter text-xs text-gray-600 mt-4 max-w-[200px]">
            Site fictício desenvolvido para o Desafio Next da CODE Jr. Fluminense Football Club © 1902.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">LOJA</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Camisas</Link></li>
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Manga Longa</Link></li>
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Moletons</Link></li>
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Calças</Link></li>
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Bermudas</Link></li>
            <li><Link href="/categorias" className="font-inter text-sm text-gray-700 hover:text-green-700">Bonés</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">AJUDA</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><Link href="/contato" className="font-inter text-sm text-gray-700 hover:text-green-700">Contato</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">INSTITUCIONAL</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><Link href="/sobre" className="font-inter text-sm text-gray-700 hover:text-green-700">Sobre nós</Link></li>
            <li><Link href="/missao" className="font-inter text-sm text-gray-700 hover:text-green-700">Missão, Visão e Valores</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}