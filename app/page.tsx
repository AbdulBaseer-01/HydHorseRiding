import About from "@/components/About";
import Contact from "@/components/Contact";
import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import Preview from "@/components/Preview";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main >
        <Hero />
        <Discover />
        <About />
        <Preview />
        <Contact />
      </main>
    </div>
  );
}
