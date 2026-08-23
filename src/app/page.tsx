import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Pain from "@/components/sections/Pain";
import Method from "@/components/sections/Method";
import Platforms from "@/components/sections/Platforms";
import Results from "@/components/sections/Results";
import ForWho from "@/components/sections/ForWho";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import StackSection from "@/components/ui/StackSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <StackSection mode="dark" seam={false}>
          <Hero />
        </StackSection>
        <StackSection mode="light">
          <Proof />
        </StackSection>
        <StackSection mode="dark">
          <Pain />
        </StackSection>
        <StackSection mode="light">
          <Method />
        </StackSection>
        <StackSection mode="dark">
          <Platforms />
        </StackSection>
        <StackSection mode="light">
          <Results />
        </StackSection>
        <StackSection mode="dark">
          <ForWho />
        </StackSection>
        <StackSection mode="orange" id="cta">
          <CTAFinal />
        </StackSection>
      </main>
      <Footer />
    </>
  );
}
