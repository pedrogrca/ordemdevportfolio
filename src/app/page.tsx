import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <Services />
      <Projects />
    </main>
  );
}
