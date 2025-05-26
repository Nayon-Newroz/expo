import BenefitsSection from "./components/BenefitsSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="pb-20 mx-auto">
      <section id="hero">
        <HeroSection />
        <BenefitsSection />
      </section>
      <section id="participate"></section>
      <section id="why-attend"></section>
      <section id="booking"></section>
    </main>
  );
}
