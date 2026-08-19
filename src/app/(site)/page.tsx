import HeroSection from "../../components/LandingPageComponentes/HeroSection";
import BeneficiosLandingPage from "../../components/LandingPageComponentes/BeneficiosLandingPage";
import CategoriasLandingPage from "../../components/LandingPageComponentes/CategoriasLandingPage";
import CarrosselLandingPage from "../../components/LandingPageComponentes/CarrosselLandingPage";
import MVV from "../../components/LandingPageComponentes/MVV";
import getProdutosCarrossel from "@/actions/home/actions";

export default async function Home() {
  const produtos = await getProdutosCarrossel();
  
  return (
    <main className="w-full flex flex-col">
      <HeroSection />
      <BeneficiosLandingPage />
      <CategoriasLandingPage />
      <CarrosselLandingPage produtos={produtos} />
      <MVV />
    </main>
  );
}