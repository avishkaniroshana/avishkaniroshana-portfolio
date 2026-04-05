import { NavLink } from "react-router-dom";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";

const TopNavbar = () => {
  const [dark, setDark] = useDarkMode();

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
      <div className="h-16 flex items-center justify-between px-[50px]">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="text-lg font-bold text-blue-600 dark:text-blue-400 px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          avishkaniroshana.me
        </NavLink>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/avishkaniroshana"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
          >
            <Linkedin size={18} />
          </a>

          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg transition-all text-gray-600 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-slate-700 hover:scale-105 active:scale-95"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
