import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full max-w-full space-y-6 sm:max-w-screen-xl mx-auto">
        <div className="p-4 sm:p-8">
          <Navbar />
        </div>
        <div id="hero" className="p-4 sm:p-8">
          <Hero />
        </div>

        <div className="p-4 sm:p-8">
          <hr className="w-full border border-[#484848]" />
        </div>

        <div id="about" className="p-4 sm:p-8">
          <About />
        </div>
        <div className="p-4 sm:p-8">
          <hr className="w-full border border-[#484848]" />
        </div>

        <div id="work" className="p-4 sm:p-8">
          <Projects />
        </div>
      </div>
    </main>
  );
}
