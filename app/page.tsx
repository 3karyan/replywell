import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import System from "@/components/System";
import Agent from "@/components/Agent";
import Process from "@/components/Process";
import Offers from "@/components/Offers";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import { FinalCTA, Footer } from "@/components/Closing";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Video />
        <System />
        <Agent />
        <Process />
        <Offers />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
