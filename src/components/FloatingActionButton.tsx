export default function FloatingActionButton() {
  return (
    <a
      href="#contato"
      className="fixed bottom-6 right-6 z-[200] bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] text-[var(--bg)] font-sans font-semibold text-[0.85rem] px-5 py-3.5 rounded-full no-underline flex items-center gap-2.5 shadow-[0_4px_24px_rgba(201,150,59,0.4)] transition-all duration-300 animate-float-in hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,150,59,0.5)]"
    >
      <div className="w-2 h-2 rounded-full bg-[var(--bg)] animate-pulse-dot"></div>
      52 crianças aguardando
    </a>
  );
}
