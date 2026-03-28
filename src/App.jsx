import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-3 pt-20 md:px-4 lg:px-8">
        <NavBar />
        <Hero />
        <About />
        <Project />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
