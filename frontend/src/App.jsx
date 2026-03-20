import { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiFedora, SiSpringboot } from "react-icons/si";
import dharma from "./assets/dharma-black.png";
import dharmaDark from "./assets/dharma-white.png";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [scrollY, setScrollY] = useState(0);
  const [image, setImage] = useState(dharma);

  const handleScroll = (e) => {
    const position = e.currentTarget.scrollTop;
    setScrollY(position);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onScroll={handleScroll}
      className="h-screen bg-amber-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors duration-200 relative overflow-y-auto"
    >
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-amber-100 dark:bg-neutral-900 hover:scale-110 transition-transform"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <img
          src={theme === "dark" ? dharma : dharmaDark}
          alt="Dharma"
          className="w-[80vw] md:w-160 opacity-20 transition-transform duration-500 ease-out"
          style={{ transform: `rotate(${scrollY / 5}deg)` }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-[40vh] pb-[20vh] text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          DEV <span className="text-indigo-500">MAHORAGA</span>
        </h1>

        <p className="text-xl mb-0 max-w-2xl mx-auto opacity-70">
          Role para ver o portifólio de um verdadeiro dev capaz de se adapatar a
          qualquer{" "}
          <span className="dark:text-indigo-500 text-blue-950 font-black opacity-100">
            situação!
          </span>
        </p>
      </div>
      <div className="relative z-10 container mx-auto px-4 pt-[30vh] pb-[20vh] text-center">
        <h2 className="text-4xl md:text-3xl font-medium mb-5 trcking-normal">
          Rituais Dominados
        </h2>
        <div className="grid grid-cols-3 w-fit mx-auto justify-center gap-6">
          <FaReact className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
          <FaNodeJs className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
          <SiTailwindcss className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
          <SiFedora className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
          <FaJava className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
          <SiSpringboot className="inline-block w-12 h-12 dark:text-indigo-500 text-black" />
        </div>
      </div>
    </div>
  );
};

export default App;
