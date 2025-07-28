import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import SkillGrid from "./sections/SkillGrid";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <main className="pt-20 max-w-7xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <SkillGrid />
        <Contact />
      </main>
    </>
  );
}

export default App;
