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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Pain />
        <Method />
        <Platforms />
        <Results />
        <ForWho />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
