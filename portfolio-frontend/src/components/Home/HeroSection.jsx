import { Link } from "react-router-dom";
import Button from "../common/Button";

const HeroSection = () => {
  const githubProfilePic = "https://github.com/avishkaniroshana.png";

  return (
    <section className="w-full flex flex-col items-center text-center py-16 gap-6">
      {/* Profile Image */}
      <div className="relative rounded-full p-1 animate-border-glow-light dark:animate-border-glow-dark">
        <img
          src={githubProfilePic}
          alt="Avishka Niroshana"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-yellow-400 dark:border-gray-300 shadow-xl object-cover"
        />
        <span className="absolute inset-0 rounded-full ring-1 ring-black/5 dark:ring-white/10" />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        Hi, I&apos;m{" "}
        <span className="text-blue-600 dark:text-blue-400 font-serif">
          Avishka Niroshana
        </span>
      </h1>

      {/* Bio */}
      <p className="max-w-xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        <span className="font-semibold text-gray-900 dark:text-white">
          Software Engineer
        </span>{" "}
        specializing in backend development with strong expertise in{" "}
        <span className="font-medium text-yellow-600 dark:text-yellow-400">
          Java Spring Boot
        </span>{". "}
        Passionate about building scalable, secure systems, with working
        knowledge of{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          React
        </span>{" "}
        for full-stack integration.
      </p>

      {/* CTA */}
      <div className="flex gap-4 mt-2">
        <Link to="/projects">
          <Button className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-800 hover:text-white font-semibold px-7 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-600 shadow hover:shadow-lg transition-all duration-300">
            View Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
