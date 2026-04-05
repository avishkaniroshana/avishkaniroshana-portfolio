import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import SkillsSection from "../components/Home/SkillsSection";
import GoToTop from "../components/common/GoToTop";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <GoToTop />
    </div>
  );
};

export default Home;
