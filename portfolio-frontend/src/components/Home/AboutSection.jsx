const highlights = [
  "Based in Sri Lanka",
  "Open to internships — On-Site | Remote | Hybrid",
  "Strong interest in Backend Development with Java Spring Boot",
];

const AboutSection = () => {
  return (
    <section className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-8 md:p-12 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full bg-teal-100/50 dark:bg-teal-900/10 blur-3xl" />

      {/* Section label */}
      <div className="flex items-center gap-3 mb-4 text-[11px] tracking-widest uppercase font-medium text-teal-700 dark:text-teal-400">
        <span>01 / About</span>
        <span className="flex-1 h-px max-w-[120px] bg-gradient-to-r from-teal-500/40 to-transparent" />
      </div>

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-2">
          About{" "}
          <em className="not-italic font-light text-teal-600 dark:text-teal-400 font-serif">
            Me
          </em>
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          A brief introduction about who I am and what I enjoy building.
        </p>
      </div>

      {/* Grid: Bio + Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left — Bio */}
        <div className="space-y-4">
          <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            <span className="font-semibold text-gray-900 dark:text-white">
              Software Engineer
            </span>{" "}
            specializing in backend development with strong expertise in{" "}
            <span className="font-medium text-yellow-600 dark:text-yellow-400">
              Java Spring Boot
            </span>{" "}
            . Experienced in designing and building scalable, secure, and
            high-performance APIs and systems. Familiar with modern frontend
            technologies like{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              React
            </span>{" "}
            to support full-stack application development.
          </p>

          <p className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            I enjoy transforming complex requirements into intuitive user
            experiences, developing{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              RESTful APIs
            </span>{" "}
            , integrating databases, and delivering responsive interfaces that
            perform efficiently across devices.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-teal-500/30 via-gray-200 dark:via-slate-700 to-transparent" />

          {/* Highlights */}
          <ul className="space-y-2.5">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Education */}
        <div>
          <p className="text-[11px] tracking-widest uppercase font-medium text-teal-700 dark:text-teal-400 mb-4">
            Education
          </p>

          <div className="relative bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 border-l-4 border-l-teal-600 rounded-xl p-6 overflow-hidden hover:-translate-y-0.5 transition-transform duration-200 hover:shadow-md">
            {/* Watermark */}
            <span className="pointer-events-none select-none absolute -top-4 right-0 text-[72px] font-bold text-teal-500/5 dark:text-teal-400/10 leading-none font-serif">
              BSc
            </span>

            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1">
              BSc (Hons) in Information &amp; Communication Technology
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Faculty of Technology
              <br />
              University of Ruhuna
            </p>
            <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-md px-3 py-1">
              2022 – 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
