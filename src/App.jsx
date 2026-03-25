import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-8 pt-20">
        <NavBar />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
