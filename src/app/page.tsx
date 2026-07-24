import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Services />
      <Projects />
      <Process />
      <WhyUs />
      <Faq />
    </main>
  );
}
