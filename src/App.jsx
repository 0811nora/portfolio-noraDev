import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { WavyBackground } from "./components/ui/Wavy-background";

function App() {
  return (
    <>
      <main className="">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-100px] left-[-100px] h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500 opacity-30 blur-[120px]"></div>
          <div className="absolute right-[-100px] bottom-[-100px] h-[400px] w-[400px] animate-pulse rounded-full bg-pink-400 opacity-30 blur-[120px]"></div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-3 pt-20 md:px-4 lg:px-8">
          <NavBar />
          <Hero />
          <About />
          <Project />
          <Skill />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
