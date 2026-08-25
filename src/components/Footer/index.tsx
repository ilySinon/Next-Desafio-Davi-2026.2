import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";

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
              style={{ width: "auto", height: "auto" }}
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
          <p className="font-inter text-xs text-gray-600 mt-4 max-w-50">
            Site fictício desenvolvido para o Desafio Next da CODE Jr. Fluminense Football Club © 1902.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">LOJA</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><Link href="/categorias/camisas" className="font-inter text-sm text-gray-700 hover:text-green-700">Camisas</Link></li>
            <li><Link href="/categorias/manga-longa" className="font-inter text-sm text-gray-700 hover:text-green-700">Manga Longa</Link></li>
            <li><Link href="/categorias/moletons" className="font-inter text-sm text-gray-700 hover:text-green-700">Moletons</Link></li>
            <li><Link href="/categorias/calcas" className="font-inter text-sm text-gray-700 hover:text-green-700">Calças</Link></li>
            <li><Link href="/categorias/bermudas" className="font-inter text-sm text-gray-700 hover:text-green-700">Bermudas</Link></li>
            <li><Link href="/categorias/bones" className="font-inter text-sm text-gray-700 hover:text-green-700">Bonés</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">AJUDA</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li><Link href="/contato" className="font-inter text-sm text-gray-700 hover:text-green-700">Contato</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          <h3 className="font-inter font-bold text-black text-sm">REDES SOCIAIS</h3>
          <ul className="flex flex-col gap-2 items-center md:items-start">
            <li>
              <Link href="https://instagram.com" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-[#7a1226] transition-colors cursor-pointer">
                <IoLogoInstagram size={20} />
                <span className="font-inter text-sm">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-[#7a1226] transition-colors cursor-pointer">
                <IoLogoTwitter size={20} />
                <span className="font-inter text-sm">Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="https://facebook.com" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-[#7a1226] transition-colors cursor-pointer">
                <IoLogoFacebook size={20} />
                <span className="font-inter text-sm">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com" target="_blank" className="flex items-center gap-2 text-gray-700 hover:text-[#7a1226] transition-colors cursor-pointer">
                <IoLogoYoutube size={20} />
                <span className="font-inter text-sm">YouTube</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}