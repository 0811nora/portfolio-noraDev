import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { BubbleBackground } from "./components/bubble";

function App() {
  return (
    <>
      <main className="">
        <BubbleBackground
          className="fixed inset-0 -z-10"
          interactive={true}
          colors={{
            first: "55,107,250",
            second: "55,133,250",
            third: "55,62,250",
            fourth: "116,110,250",
            fifth: "250,225,82",
            sixth: "21,167,226",
          }}
        />
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
