import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
    </>
  );
}

export default App;
