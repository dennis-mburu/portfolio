import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
