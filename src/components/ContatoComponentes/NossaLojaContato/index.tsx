import { MapPin, Clock } from "lucide-react";
import { MiniTitulo } from "../../Titulos";

export default function NossaLojaContato() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col gap-8">
      
      <MiniTitulo texto="NOSSA LOJA" icone={MapPin} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-62.5 lg:h-full lg:min-h-62.5 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3214539130767!2d-43.18731502390234!3d-22.93836173898168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd6fbfb2089%3A0xe54e60f0896fb1!2sR.%20Pinheiro%20Machado%2C%2086%20-%20Laranjeiras%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022231-090!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="rounded-lg"
          ></iframe>
        </div>      
        <div className="flex flex-col gap-4 justify-center">
          <div className="bg-(--var-Creme) rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-(--var-grenaCard)">
              <MapPin size={20} />
              <span className="font-inter font-bold text-sm text-black">Endereço</span>
            </div>
            <p className="font-inter text-sm text-gray-600 mt-2">
              R. Pinheiro Machado, 86-126<br/>
              Laranjeiras, Rio de Janeiro - RJ,<br/>
              CEP 22231-230
            </p>
          </div>

          <div className="bg-(--var-Creme) rounded-lg p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-(--var-grenaCard)">
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
  );
}