import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-10 md:py-[18px] flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-[rgba(13,11,8,0.95)] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"}`}>
      <a href="#" className="flex items-center gap-2 md:gap-2.5 no-underline">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8221.JPG-KxKEy1vUFCpzTeJmQK2bZxf50BthLQ.jpeg"
          alt="Logo Projeto Fênix"
          className="w-9 h-9 md:w-10 md:h-10 object-contain rounded"
        />
        <span className="font-serif text-[1.2rem] md:text-[1.6rem] font-bold text-[var(--gold-light)] tracking-[0.04em]">
          FÊNIX
        </span>
      </a>
      <a
        href="#contato"
        className="text-[var(--bg)] font-sans font-semibold text-[0.7rem] sm:text-[0.85rem] tracking-[0.04em] sm:tracking-[0.08em] uppercase px-4 py-2 bg-[var(--gold)] md:px-5 md:py-2.5 rounded-sm no-underline transition-all duration-200 hover:bg-[var(--gold-light)] flex items-center justify-center min-h-[44px] text-center"
      >
        Apadrinhe Agora
      </a>
    </header>
  );
}
