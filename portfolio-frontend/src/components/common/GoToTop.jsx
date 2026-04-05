
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        p-3 rounded-full shadow-lg
        bg-gray-600 text-white opacity-50
        hover:bg-gray-700
        dark:bg-gray-500 dark:hover:bg-gray-600
        transition hover:scale-110 active:scale-95
      "
      aria-label="Go to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default GoToTop;
