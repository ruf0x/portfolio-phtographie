import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import WorkGallery from "@/components/WorkGallery";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <About />
      </section>
      <Showreel />
      <section id="work" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <WorkGallery />
      </section>
    </main>
  );
}
