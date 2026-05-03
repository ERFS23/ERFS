import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Refresh page after smooth scrolling to reset all animations
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="fixed bottom-6 left-6 z-[200] w-10 h-10 rounded-full bg-[rgba(201,150,59,0.1)] border border-[rgba(201,150,59,0.3)] text-[var(--gold)] flex items-center justify-center hover:bg-[rgba(201,150,59,0.2)] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
          aria-label="Voltar ao topo e reiniciar animações"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
