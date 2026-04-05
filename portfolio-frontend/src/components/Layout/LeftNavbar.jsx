import { NavLink } from "react-router-dom";
import {
  Home,
  FolderGit2,
  Mail,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderGit2 },
  { name: "Connect", path: "/connect", icon: Mail },
  { name: "Achievements", path: "/achievements", icon: Award },
];

const LeftNavbar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-30 h-screen
          bg-white dark:bg-slate-900
          border-r border-gray-200 dark:border-slate-700
          flex flex-col
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "w-56" : "w-0 overflow-hidden"}
        `}
      >
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-slate-700 shrink-0">
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
            {/* Avishka<span className="text-gray-400"></span> */}
            <img
              src="https://github.com/avishkaniroshana.png"
              alt="Logo"
              className="
            w-10 h-10 rounded-full
            border-2 border-yellow-400 dark:border-gray-300
            shadow-xl
          "
            />
          </span>
        </div>

        {/* Navigation */}
        <nav className="mt-6 flex flex-col gap-1 px-3 overflow-hidden">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 whitespace-nowrap
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} className="shrink-0" />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Floating toggle button — always visible */}
      <button
        onClick={toggleSidebar}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        className={`
          fixed top-4 z-40
          flex items-center justify-center
          w-8 h-8 rounded-full
          bg-white dark:bg-slate-800
          border border-gray-200 dark:border-slate-600
          shadow-md
          text-gray-600 dark:text-gray-300
          hover:text-blue-500 dark:hover:text-blue-400
          hover:shadow-lg
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "left-[13.5rem]" : "left-3"}
        `}
      >
        {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>
    </>
  );
};

export default LeftNavbar;
