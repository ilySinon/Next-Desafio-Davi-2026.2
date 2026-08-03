"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation"; 


export default function Navbar() {
  const pathname = usePathname(); 
  
  const isHome = pathname === '/';
  const isCategorias = pathname === '/categorias';
  const isContato = pathname === '/contato';

  return (
    <nav className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between px-12 bg-transparent z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/basicas/logo.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <div className="flex flex-col">
          <span className="font-anton text-xl tracking-wider text-white">
            TRICOLOR
          </span>
          <span className="text-sm tracking-wider text-white">
            LOJA - DESDE 1902
          </span>
        </div>
      </div>

      <div className="flex items-center bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/30 gap-8">
        <Link className={`font-inter text-sm transition-colors ${isHome ? 'text-red-500' : 'text-white hover:text-green-400'}`}
        href="/"
        >
          INÍCIO
        </Link>
        <Link  className={`font-inter text-sm transition-colors ${isCategorias ? 'text-red-500' : 'text-white hover:text-green-400'}`}
        href="/categorias"
        >
          CATEGORIAS
        </Link>
        <Link className={`font-inter text-sm transition-colors ${isContato ? 'text-red-500' : 'text-white hover:text-green-400'}`}
        href="/contato" 
        >
          CONTATO
        </Link>
      </div>

      <div className="flex items-center gap-6 text-white">
        <button className="hover:scale-110 transition-transform">
          <Search size={24} />
        </button>
        <Link className="hover:scale-110 transition-transform"
        href="/cadastro"
        >
          <User size={24} />
        </Link>
        <Link className="hover:scale-110 transition-transform"
        href="/carrinho"
        >
          <ShoppingBag size={24} />
        </Link>
      </div>
    </nav>
  );
}