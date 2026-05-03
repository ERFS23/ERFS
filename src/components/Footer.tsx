export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,150,59,0.12)] py-12 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-center gap-3.5 mb-3">
          <div className="w-8 h-8 bg-[radial-gradient(circle_at_50%_80%,var(--amber),var(--gold)_50%,transparent_70%)] rounded-[50%_50%_40%_40%] animate-flicker"></div>
          <span className="font-serif text-[1.8rem] font-bold text-[var(--gold-light)]">FÊNIX</span>
        </div>
        <p className="text-[0.85rem] text-[var(--muted)]">Transformando vidas em abrigos de Curitiba, Paraná.</p>
        <p className="text-[0.85rem] text-[var(--muted)] mt-2 opacity-50">© 2025 Projeto Fênix · Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
