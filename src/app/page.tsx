import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Differentials from "@/components/Differentials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Differentials />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
