import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Pain from "@/components/sections/Pain";
import Method from "@/components/sections/Method";
import Differentiator from "@/components/sections/Differentiator";
import Founder from "@/components/sections/Founder";
import ForWho from "@/components/sections/ForWho";
import Objections from "@/components/sections/Objections";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";
import KineticWord from "@/components/ui/KineticWord";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <StackSection mode="dark" seam={false}>
          <Hero />
        </StackSection>
        <StackSection mode="dark" seam={false} minHeight={false} id="prova">
          <LogoMarquee />
        </StackSection>
        <StackSection mode="dark" seam={false}>
          <Pain />
        </StackSection>
        <StackSection mode="light">
          <Method />
        </StackSection>
        <StackSection mode="dark">
          <Differentiator />
        </StackSection>
        <KineticWord word="RESULTADO" />
        <StackSection mode="light">
          <Founder />
        </StackSection>
        <StackSection mode="dark">
          <ForWho />
        </StackSection>
        <StackSection mode="light">
          <Objections />
        </StackSection>
        <StackSection mode="orange" id="cta">
          <CTAFinal />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
