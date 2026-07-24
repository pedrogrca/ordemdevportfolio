import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Services />
      <Projects />
      <Process />
    </main>
  );
}
