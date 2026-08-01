"use client";

import Image from "next/image";
import Link from "next/link";
import { Search , User , ShoppingBag } from "lucide-react";

export default function Navbar(){
    return(
        <nav className="fixed top-0 flex flex-row items-center justify-between w-[100vw] h-[84px] border-2  border-black px-8">
            <div className="border-2  border-black">
                <Image
                    src="/basicas/logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
                <div className="">

                </div>
            </div>
            <div className="flex flex-row border-2  border-black gap-[12px]">
                <Link href="/"> INÍCIO </Link>
                <Link href="/categorias"> CATEGORIAS </Link>
                <Link href="/contato"> CONTATO </Link>
            </div>

            {/* Ícones da Navbar */}
            <div className="flex flex-row gap-4 border-2  border-black">
                <Search/>
                <User/>
                <ShoppingBag/>
            </div>
            
        </nav>
    );
} 