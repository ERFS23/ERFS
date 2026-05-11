import * as React from "react"
import { motion, AnimatePresence } from "motion/react";

export function ShiningText({ text }: { text: string }) {
  return (
    <motion.h1
      className="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-base font-regular text-transparent font-serif text-[clamp(1.5rem,3vw,2rem)] tracking-[0.05em]"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.h1>
  );
}

export function LoadingScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg)]"
        >
          <ShiningText text="Construindo um sonho..." />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
