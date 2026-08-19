"use client"

import { useState } from "react";
import { MessageSquare, User, Mail, Send, ExternalLink } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValue } from "@/src/schema/form";
import { MiniTitulo } from "../../Titulos";
import { CardRedirecionamento } from "../../Cards";
import { BotaoSubmitComIcone } from "../../botoes";

export function BoxContato() {
  const [isSubmitFeito, setIsSubmitFeito] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, register, formState: { errors }, reset } = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mensagem: ""
    }
  });

  const onSubmit = async (data: FormValue) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setIsSubmitFeito(true);
      reset();
    } else {
      setError("Ocorreu um erro ao enviar email!");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
      
      <MiniTitulo texto="ENVIE SUA MENSAGEM" icone={MessageSquare} />
      
      {isSubmitFeito && <span className="text-green-500">Email enviado!</span>}
      {error && <span className="text-red-500">{error}</span>}
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#7a1226]">
            <User size={16} />
            <label className="font-inter font-bold text-xs text-black">Nome completo</label>
          </div>
          <input 
            type="text" 
            placeholder="Digite seu nome completo" 
            className="w-full bg-(--var-Creme) rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-(--var-grenaCard)"
            {...register("name")}
          />
          <label className="text-red-600">{errors.name?.message}</label>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#7a1226]">
            <Mail size={16} />
            <label className="font-inter font-bold text-xs text-black">E-mail</label>
          </div>
          <input 
            type="email" 
            placeholder="seuemail@email.com" 
            className="w-full bg-(--var-Creme) rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-(--var-grenaCard)"
            {...register("email")}
          />
          <label className="text-red-600">{errors.email?.message}</label>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#7a1226]">
            <MessageSquare size={16} />
            <label className="font-inter font-bold text-xs text-black">Mensagem</label>
          </div>
          <textarea 
            placeholder="Digite sua mensagem aqui" 
            rows={4}
            className="w-full bg-(--var-Creme) rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-(--var-grenaCard) resize-none"
            {...register("mensagem")}
          ></textarea>
          <label className="text-red-600">{errors.mensagem?.message}</label>
        </div>
        
        <BotaoSubmitComIcone 
          texto="Enviar mensagem" 
          icone={Send} 
          cor="w-full mt-2 bg-(--var-grenaCard) text-white hover:bg-[#5a0d1c] rounded-lg" 
        />
      </form>
    </div>
  );
}

export function BoxRedes() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
      
      <MiniTitulo texto="NOSSAS REDES" icone={ExternalLink} />
      
      <div className="flex flex-col gap-4">
        <CardRedirecionamento
          titulo="@fluminensefc"
          subtitulo="Instagram"
          href="https://www.instagram.com/fluminensefc/"
        />
        <CardRedirecionamento
          titulo="Fluminense Football Club"
          subtitulo="Facebook"
          href="https://www.facebook.com/FluminenseFC/?locale=pt_BR"
        />
        <CardRedirecionamento
          titulo="Fluminense Football Club"
          subtitulo="Youtube"
          href="https://www.youtube.com/fluminensefc"
        />
        <CardRedirecionamento
          titulo="contato@fluminensefc.com.br"
          subtitulo="E-mail"
          href="mailto:contato@fluminensefc.com.br"
          target="_self"
        />
      </div>
    </div>
  );
}