import { Server, Monitor, Database, Wrench } from "lucide-react";

const skills = [
  {
    key: "backend",
    title: "Backend",
    description: "Secure and scalable server-side applications",
    items: ["Java", "Spring Boot", "REST APIs"],
    accentColor: "border-l-amber-500",
    tagClass: "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    iconClass: "text-amber-500",
    Icon: Server,
  },
  {
    key: "frontend",
    title: "Frontend",
    description: "Responsive and accessible user interfaces",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
    accentColor: "border-l-blue-500",
    tagClass: "bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    iconClass: "text-blue-500",
    Icon: Monitor,
  },
  {
    key: "database",
    title: "Database",
    description: "Managing structured and unstructured data",
    items: ["MySQL", "MongoDB"],
    accentColor: "border-l-teal-600",
    tagClass: "bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800",
    iconClass: "text-teal-600",
    Icon: Database,
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    description: "Development tools and collaboration",
    items: ["Git", "GitHub", "Postman", "ClickUp", "Azure"],
    accentColor: "border-l-violet-500",
    tagClass: "bg-violet-50 dark:bg-violet-950/40 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-800",
    iconClass: "text-violet-500",
    Icon: Wrench,
  },
];

const SkillsSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden">

      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full bg-teal-100/50 dark:bg-teal-900/10 blur-3xl" />

      {/* Section label */}
      <div className="flex items-center gap-3 mb-4 text-[11px] tracking-widest uppercase font-medium text-teal-700 dark:text-teal-400">
        <span>02 / Skills</span>
        <span className="flex-1 h-px max-w-[120px] bg-gradient-to-r from-teal-500/40 to-transparent" />
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          Skills &amp;{" "}
          <em className="not-italic font-light text-teal-600 dark:text-teal-400 font-serif">
            Expertise
          </em>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Technologies and tools I use to build full-stack applications.
        </p>
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skills.map((group) => (
          <div
            key={group.key}
            className={`relative bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 border-l-4 ${group.accentColor} rounded-xl p-6 overflow-hidden hover:-translate-y-1 transition-transform duration-200 hover:shadow-md`}
          >
            {/* Icon */}
            <div className="mb-3">
              <group.Icon size={22} className={group.iconClass} strokeWidth={1.75} />
            </div>

            {/* Title */}
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {group.title}
            </h3>

            {/* Description */}
            <p className="text-[13px] text-gray-500 dark:text-gray-400 font-light leading-snug mb-4">
              {group.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-md border ${group.tagClass}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
