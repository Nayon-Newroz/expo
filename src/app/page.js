import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="participate"></section>
      <section id="why-attend"></section>
      <section id="booking"></section>
    </main>
  );
}
