import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full max-w-full space-y-6 sm:max-w-screen-xl mx-auto">
        <div className="p-4 sm:p-8">
          <Navbar />
        </div>
        <div className="p-4 sm:p-8">
          <Hero />
        </div>
        <div className="p-4 sm:p-8">
          <hr className="w-full" />
        </div>
        <div className="p-4 sm:p-8">
          <About />
        </div>
      </div>
    </main>
  );
}
