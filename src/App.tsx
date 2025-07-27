import "./App.css";
import { motion } from "framer-motion";
import ThemeToggleButton from "./components/themeToggleButton";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="p-8"
      >
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
      </motion.div>
      <ThemeToggleButton />
    </>
  );
}

export default App;
