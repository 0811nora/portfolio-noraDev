import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Project from "./sections/project";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { BubbleBackground } from "./components/animate-ui/components/backgrounds/bubble";

function App() {
  return (
    <>
      <main className="">
        <BubbleBackground
          className="fixed inset-0 -z-10"
          interactive={true}
          colors={{
            first: "21,167,226", // #15a7e2 主藍
            second: "8,134,193", // #0886c1 深藍
            third: "62,190,242", // #3ebef2 亮藍
            fourth: "8,107,156", // #086b9c 暗藍
            fifth: "129,212,248", // #81d4f8 淺藍
            sixth: "11,155,210", // 介於中間的藍，增加層次
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
