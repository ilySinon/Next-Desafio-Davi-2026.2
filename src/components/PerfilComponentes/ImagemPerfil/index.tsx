"use client";

import { useState } from "react";
import { Camera, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { atualizarImagemPerfil } from "../../../../actions/perfil/actions";

export default function ImagemPerfil({ imagemAtual }: { imagemAtual?: string | null }) {
  const [preview, setPreview] = useState<string | null>(imagemAtual || null);
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    setCarregando(true);

    const formData = new FormData();
    formData.append("imagem", file);

    const resultado = await atualizarImagemPerfil(formData);
    
    if (resultado?.sucesso) {
      router.refresh();
    } else {
      alert(resultado?.erro || "Erro ao salvar imagem.");
      setPreview(imagemAtual || null); 
    }
    setCarregando(false);
  };

  return (
    <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full group cursor-pointer border-4 border-[#7a1226] shadow-xl overflow-hidden bg-gray-200 shrink-0">
      <img 
        src={preview || "/basicas/Teste.png"} 
        alt="Foto de perfil" 
        className="w-full h-full object-cover"
      />
      
      <label className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
        {carregando ? (
          <Loader2 className="animate-spin text-white" size={24} />
        ) : (
          <>
            <Camera className="text-white mb-1" size={24} />
            <span className="text-white text-xs font-inter font-medium">Trocar foto</span>
          </>
        )}
        <input 
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={handleFileChange}
          disabled={carregando}
        />
      </label>
    </div>
  );
}