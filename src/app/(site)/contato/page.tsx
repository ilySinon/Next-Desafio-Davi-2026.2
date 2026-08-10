"use client"

import { useState } from "react";
import { MessageSquare, User, Mail, Send, ExternalLink, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValue } from "@/src/schema/form";

export default function Contato() {
  const [isSubmitFeito, setIsSubmitFeito] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {handleSubmit, register, formState: {errors}, reset} = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mensagem: ""
    }
  })

  const onSubmit = async(data: FormValue) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })

    if(response.ok){
      setIsSubmitFeito(true);
      reset()
    }else{
      setError("Ocorreu um erro ao enviar email!")
    }
  }
  return (
    <>
      <main className="w-full min-h-screen bg-[#F6F5EF] flex flex-col items-center">
        <div className="w-full flex flex-col items-center bg-gradient-to-r from-[#65001A] via-[#00100C] to-[#004C23] pt-[180px] pb-24 px-6 lg:px-12">
          <h1 className="text-5xl lg:text-6xl text-center font-anton text-white leading-tight">
            VAMOS CONVERSAR<br/>
            SOBRE O SEU MANTO?
          </h1>
          <p className="font-inter text-gray-300 text-center mt-6 text-sm">
            Dúvidas sobre pedidos, tamanhos ou personalização - estamos prontos para atender a<br/> <br className="hidden lg:block"/>
            Nação <span className="font-bold text-white">Tricolor</span>.
          </p>
        </div>
        <div className="w-full max-w-7xl px-6 lg:px-12 py-20 flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#7a1226] p-3 rounded-full text-white">
                  <MessageSquare size={24} />
                </div>
                <h2 className="font-anton text-2xl lg:text-3xl text-black">ENVIE SUA MENSAGEM</h2>
              </div> 
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
                    className="w-full bg-[#F6F5EF] rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-[#7a1226]"
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
                    className="w-full bg-[#F6F5EF] rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-[#7a1226]"
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
                    className="w-full bg-[#F6F5EF] rounded-lg p-4 font-inter text-sm outline-none border border-transparent focus:border-[#7a1226] resize-none"
                    {...register("mensagem")}
                  ></textarea>
                  <label className="text-red-600">{errors.mensagem?.message}</label>
                </div>
                
                <button type="submit" className="w-full bg-[#7a1226] text-white font-inter font-bold text-sm rounded-lg p-4 mt-2 flex items-center justify-center gap-2 hover:bg-[#5a0d1c] transition-colors">
                  Enviar mensagem <Send size={16} />
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#004C23] p-3 rounded-full text-white">
                  <ExternalLink size={24} />
                </div>
                <h2 className="font-anton text-2xl lg:text-3xl text-black">NOSSAS REDES</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="w-full bg-[#F6F5EF] rounded-lg p-4 flex items-center justify-between group hover:bg-[#e8e7e1] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-sm text-black">@fluminensefc</span>
                      <span className="font-inter text-xs text-gray-500">Instagram</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>

                <a href="#" className="w-full bg-[#F6F5EF] rounded-lg p-4 flex items-center justify-between group hover:bg-[#e8e7e1] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-sm text-black">Fluminense Football Club</span>
                      <span className="font-inter text-xs text-gray-500">Facebook</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>

                <a href="youtube.com/@fluminensefc" className="w-full bg-[#F6F5EF] rounded-lg p-4 flex items-center justify-between group hover:bg-[#e8e7e1] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-sm text-black">Fluminense Football Club</span>
                      <span className="font-inter text-xs text-gray-500">Youtube</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>

                <a href="#" className="w-full bg-[#F6F5EF] rounded-lg p-4 flex items-center justify-between group hover:bg-[#e8e7e1] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="font-inter font-bold text-sm text-black">contato@fluminensefc.com.br</span>
                      <span className="font-inter text-xs text-gray-500">E-mail</span>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#7a1226] p-3 rounded-full text-white">
                <MapPin size={24} />
              </div>
              <h2 className="font-anton text-2xl lg:text-3xl text-black">NOSSA LOJA</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full h-[250px] lg:h-full lg:min-h-[250px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3214539130767!2d-43.18731502390234!3d-22.93836173898168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd6fbfb2089%3A0xe54e60f0896fb1!2sR.%20Pinheiro%20Machado%2C%2086%20-%20Laranjeiras%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022231-090!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
              </div>      
              <div className="flex flex-col gap-4 justify-center">
                <div className="bg-[#F6F5EF] rounded-lg p-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#7a1226]">
                    <MapPin size={20} />
                    <span className="font-inter font-bold text-sm text-black">Endereço</span>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mt-2">
                    R. Pinheiro Machado, 86-126<br/>
                    Laranjeiras, Rio de Janeiro - RJ,<br/>
                    CEP 22231-230
                  </p>
                </div>

                <div className="bg-[#F6F5EF] rounded-lg p-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#7a1226]">
                    <Clock size={20} />
                    <span className="font-inter font-bold text-sm text-black">Horários</span>
                  </div>
                  <p className="font-inter text-sm text-gray-600 mt-2">
                    Segunda a Sexta: 10h às 20h<br/>
                    Sábado: 10h às 18h<br/>
                    Domingo: fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}