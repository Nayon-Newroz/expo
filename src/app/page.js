import BenefitsSection from "./components/BenefitsSection";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Participates from "./components/Participates";
import WhyAttend from "./components/WhyAttend";

export default function Home() {
  return (
    <main className="mx-auto">
      <section id="hero">
        <HeroSection />
        <BenefitsSection/>
      </section>
      <section id="participates">
        <Participates />
      </section>
      <section
        id="why-attend"
        style={{ background: "linear-gradient(to right, #EC4899, #3B82F6)" }}
      >
        <WhyAttend />
      </section>
      <section id="booking">
        <Booking />
      </section>
      <Footer />
    </main>
  );
}
