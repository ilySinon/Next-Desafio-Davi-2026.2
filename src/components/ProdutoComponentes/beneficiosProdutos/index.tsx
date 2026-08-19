import { Truck, ShieldCheck } from "lucide-react";
import Beneficio from "../../Beneficios"; 

export default function BeneficiosProdutos() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 pt-8 border-t border-gray-200">
      <Beneficio
        titulo="Frete grátis"
        descricao="Acima de R$ 299 para todo o Brasil"
        icone={Truck}
        corFundoIcone="bg-[#F5E6E8]"
        corIcone="text-(--var-grenaCard)"
      />
      
      <Beneficio
        titulo="Produtos oficiais"
        descricao="100% licenciados pelo Fluminense FC"
        icone={ShieldCheck}
        corFundoIcone="bg-[#E8F2EC]"
        corIcone="text-(--var-verdeGradiante)"
      />
    </div>
  );
}