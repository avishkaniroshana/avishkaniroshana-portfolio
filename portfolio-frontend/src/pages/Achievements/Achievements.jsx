import { NavLink, Outlet } from "react-router-dom";
import { Award } from "lucide-react";
import GoToTop from "@/components/common/GoToTop";

const Achievements = () => {
  return (
    <section className="min-h-screen px-6 lg:px-24 py-16">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <Award className="text-blue-600 dark:text-blue-400" size={28} />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Achievements
          </h1>
        </div>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400">
          A curated collection of my professional certifications, verified
          badges, and recognitions earned through continuous learning and
          hands-on experience.
        </p>
      </div>

      {/* Tabs Container */}
      <div
        className="
          inline-flex gap-2 mb-10
          rounded-xl p-1
          bg-gray-100 dark:bg-slate-800
          border border-gray-200 dark:border-slate-700
        "
      >
        <NavLink
          to="certifications"
          className={({ isActive }) =>
            `
            px-5 py-2 rounded-lg text-sm font-medium transition
            ${
              isActive
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }
            `
          }
        >
          Certifications
        </NavLink>

        <NavLink
          to="badges"
          className={({ isActive }) =>
            `
            px-5 py-2 rounded-lg text-sm font-medium transition
            ${
              isActive
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }
            `
          }
        >
          Badges
        </NavLink>
      </div>

      {/* Content Area */}
      <div
        className="
          rounded-2xl p-6 md:p-8
          bg-white dark:bg-slate-900
          border border-gray-200 dark:border-slate-700
          shadow-sm
        "
      >
        <Outlet />
      </div>
      <GoToTop />
    </section>
  );
};

export default Achievements;
