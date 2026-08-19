import Beneficio from "../../../components/Beneficios";
import { Truck, ShieldCheck, Trophy } from "lucide-react";

export default function BeneficiosLandingPage() {
    return(
        <section className="w-full bg-(--var-Creme) border-b border-gray-200 py-8 lg:py-6 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start lg:items-center">
            <Beneficio
              titulo="Frete grátis"
              descricao="Acima de R$ 299 para todo o Brasil"
              icone={Truck}
              corFundoIcone="bg-(--var-brancoCard)"
              corIcone="text-(--var-grenaCard)"
            />
            <Beneficio
              titulo="Produtos oficiais"
              descricao="100% licenciados pelo Fluminense FC"
              icone={ShieldCheck}
              corFundoIcone="bg-(--var-brancoCard)"
              corIcone="text-(--var-grenaCard)"
            />
            <Beneficio
              titulo="Coleção 2026"
              descricao="Manto novo, a Glória de sempre"
              icone={Trophy}
              corFundoIcone="bbg-(--var-brancoCard)"
              corIcone="text-[var(--var-grenaCard)]"
            />
          </div>
        </section>
    )
};