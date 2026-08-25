"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, Package, LogOut, Menu } from "lucide-react";
import { Logout } from "../../../actions/LoginCadastro/Logout/actions";

export function SidebarAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await Logout();
    router.push("/login");
  };

  return (
    <>
      <nav className="lg:hidden fixed top-0 left-0 w-full h-20 bg-(--var-grenaCard) flex items-center justify-between px-6 z-50 shadow-md">
        <Link href="/" className="shrink-0 cursor-pointer">
          <Image 
            src="/basicas/logo.png" 
            alt="Escudo Fluminense" 
            width={40}
            height={40}
            priority
            style={{ width: "auto", height: "auto" }}
            className="w-10 h-10 object-contain" 
          />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white hover:opacity-80 transition-opacity cursor-pointer">
            <Home size={28} />
          </Link>
          <Link href="/dashboard" className="bg-[#0A4B27] p-2.5 rounded-xl text-white shadow-sm cursor-pointer">
            <Package size={28} />
          </Link>
          <button 
            onClick={handleLogout}
            className="text-white hover:opacity-80 transition-opacity ml-2 cursor-pointer"
          >
            <LogOut size={28} />
          </button>
        </div>
      </nav>

      <aside 
        className={`hidden lg:flex flex-col fixed top-0 left-0 h-screen bg-(--var-grenaCard) transition-all duration-300 z-50 py-8 shadow-xl ${
          isOpen ? "w-72" : "w-24"
        }`}
      >
        <div className="px-6 mb-8 flex items-center justify-center lg:justify-start">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:opacity-80 transition-opacity flex items-center justify-center w-12 h-12 cursor-pointer"
          >
            <Menu size={28} />
          </button>
        </div>

        <Link href="/" className="flex items-center px-6 mb-12 h-16 shrink-0 overflow-hidden cursor-pointer group/logo">
          <Image 
            src="/basicas/logo.png" 
            alt="Escudo Fluminense" 
            width={48}
            height={48}
            priority
            style={{ width: "auto", height: "auto" }}
            className="w-12 h-12 shrink-0 object-contain group-hover/logo:opacity-90 transition-opacity" 
          />
          <div className={`ml-4 transition-all duration-300 flex flex-col shrink-0 whitespace-nowrap ${
            isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
          }`}>
            <span className="font-anton text-3xl text-white tracking-wide uppercase">
              Tricolor
            </span>
            <span className="font-inter text-[10px] text-white/80 uppercase tracking-widest mt-1">
              Loja - Desde 1902
            </span>
          </div>
        </Link>

        <nav className="flex flex-col gap-4 px-4 flex-1">
          <Link 
            href="/" 
            className="flex items-center gap-4 px-4 py-4 rounded-2xl text-white hover:bg-white/10 transition-colors overflow-hidden cursor-pointer"
          >
            <Home size={28} className="shrink-0" />
            <span className={`font-inter font-bold text-sm transition-all duration-300 shrink-0 whitespace-nowrap ${
              isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}>
              Início
            </span>
          </Link>

          <Link 
            href="/dashboard" 
            className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-[#0A4B27] text-white overflow-hidden shadow-sm cursor-pointer"
          >
            <Package size={28} className="shrink-0" />
            <span className={`font-inter font-bold text-sm transition-all duration-300 shrink-0 whitespace-nowrap ${
              isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}>
              Produtos
            </span>
          </Link>
        </nav>

        <div className="px-4 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-white hover:bg-white/10 transition-colors overflow-hidden cursor-pointer"
          >
            <LogOut size={28} className="shrink-0" />
            <span className={`font-inter font-bold text-sm transition-all duration-300 shrink-0 whitespace-nowrap ${
              isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}>
              Deslogar
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}