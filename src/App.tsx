import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 max-w-7xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
