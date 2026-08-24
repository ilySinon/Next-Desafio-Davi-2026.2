'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation"; 
import Pesquisar from "../PesquisarComponente/index";
import { obterUsuario } from "@/actions/logado/action";


export default function Navbar() {
  const pathname = usePathname(); 
  
  const isHome = pathname === '/';
  const isCategorias = pathname === '/categorias';
  const isContato = pathname === '/contato';
  const isDashboard = pathname === '/dashboard';

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPesquisarOpen, setisPesquisarOpen] = useState(false);
  const [usuario, setUsuario] = useState<any>(null);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const togglePesquisar = () => setisPesquisarOpen(!isPesquisarOpen);

  const searchParams = useSearchParams()

  const toggleNavPesquisar = () => {
    if (isPesquisarOpen) {
      setisPesquisarOpen(false);
    }
    toggleNav();
  };

  useEffect(() => {
    setisPesquisarOpen(false)
    setIsNavOpen(false)
  }, [pathname, searchParams])

  useEffect(() => {
    async function checarLogado() {
      const dados = await obterUsuario();
      setUsuario(dados);
    }
    checarLogado();
  }, []);

  const handleMobileSearch = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
    togglePesquisar();
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-25 flex items-center justify-between px-6 lg:px-12 bg-transparent z-50">
      <div className="flex items-center gap-3">
        <Link href='/' className="items-center">
          <Image
            src="/basicas/logo.png"
            alt="Logo"
            width={250}
            height={250}
            className="w-16 h-auto"
          />
        </Link>
        <div className="flex flex-col">
          <span className="font-anton text-xl tracking-wider text-black">
            TRICOLOR
          </span>
          <span className="text-sm tracking-wider text-black">
            LOJA - DESDE 1902
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-white/30 gap-8">
        <Link className={`font-inter text-sm transition-colors ${isHome ? 'text-red-500' : 'text-green-500 hover:text-green-400'}`} href="/">
          INÍCIO
        </Link>
        <Link className={`font-inter text-sm transition-colors ${isCategorias ? 'text-red-500' : 'text-green-500 hover:text-green-400'}`} href="/categorias">
          CATEGORIAS
        </Link>
        <Link className={`font-inter text-sm transition-colors ${isContato ? 'text-red-500' : 'text-green-500 hover:text-green-400'}`} href="/contato">
          CONTATO
        </Link>
        <Link className={`font-inter text-sm transition-colors ${isDashboard ? 'text-red-500' : 'text-green-500 hover:text-green-400'}`} href="/dashboard">
          DASHBOARD
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-black">
        <button className="hover:scale-110 transition-transform" onClick={togglePesquisar}>
          <Search size={24}/>
        </button>
        <Link className="hover:scale-110 transition-transform" href={usuario ? "/perfil" : "/login"}>
          <User size={24} className={usuario ? "text-red-500" : "text-black"} />
        </Link>
        <Link className="hover:scale-110 transition-transform" href="/carrinho">
          <ShoppingBag size={24} />
        </Link>
      </div>

      <div className="flex lg:hidden items-center gap-6 text-black">
        <button className="hover:scale-110 transition-transform" onClick={handleMobileSearch}>
          <Search size={24}/>
        </button>
        <button className="hover:scale-110 transition-transform" onClick={toggleNavPesquisar}>
          {isNavOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isNavOpen && (
        <div className="absolute top-25 left-0 w-full bg-[#00100C] flex flex-col items-center py-10 gap-8 shadow-2xl border-t border-white/10 lg:hidden">
          <Link className={`font-inter text-lg transition-colors ${isHome ? 'text-red-500' : 'text-green-500'}`} href="/" onClick={toggleNav}>
            INÍCIO
          </Link>
          <Link className={`font-inter text-lg transition-colors ${isCategorias ? 'text-red-500' : 'text-green-500'}`} href="/categorias" onClick={toggleNav}>
            CATEGORIAS
          </Link>
          <Link className={`font-inter text-lg transition-colors ${isContato ? 'text-red-500' : 'text-green-500'}`} href="/contato" onClick={toggleNav}>
            CONTATO
          </Link>
          <Link className={`font-inter text-lg transition-colors ${isDashboard ? 'text-red-500' : 'text-green-500'}`} href="/dashboard" onClick={toggleNav}>
            DASHBOARD
          </Link>
          <Link className={`font-inter text-lg transition-colors ${pathname === '/perfil' ? 'text-red-500' : 'text-green-500'}`} href={usuario ? "/perfil" : "/login"} onClick={toggleNav}>
            {usuario ? 'MEU PERFIL' : 'LOGIN'}
          </Link>
        </div>
      )}

      {isPesquisarOpen && (
        <Pesquisar/>
      )}
    </nav>
  );
}