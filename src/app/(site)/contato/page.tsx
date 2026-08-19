"use client"

import { BoxContato, BoxRedes } from "../../../components/ContatoComponentes/boxs";
import HeroSectionContato from "../../../components/ContatoComponentes/HeroSectionContato";
import NossaLojaContato from "../../../components/ContatoComponentes/NossaLojaContato";

export default function Contato() {
  return (
    <main className="w-full min-h-screen bg-(--var-Creme) flex flex-col items-center">
      
      <HeroSectionContato />

      <div className="w-full max-w-7xl px-6 lg:px-12 py-20 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BoxContato />
          <BoxRedes />
        </div>

        <NossaLojaContato />
      </div>
      
    </main>
  );
}