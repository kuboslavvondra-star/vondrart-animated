import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Collaborations } from "@/components/Collaborations";
import { Illustrations } from "@/components/Illustrations";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Projects />
        <Services />
        <Illustrations />
        <Collaborations />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>
          <span>vond</span>rart
        </span>
        <span>© 2026 vondrart studio</span>
      </footer>
    </>
  );
}
