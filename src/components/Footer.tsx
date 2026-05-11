export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,150,59,0.12)] py-12 text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-center gap-3.5 mb-3">
          <div className="w-8 h-8 bg-[radial-gradient(circle_at_50%_80%,var(--amber),var(--gold)_50%,transparent_70%)] rounded-[50%_50%_40%_40%] animate-flicker"></div>
          <span className="font-serif text-[1.8rem] font-bold text-[var(--gold-light)]">FÊNIX</span>
        </div>
        <p className="text-[0.85rem] text-[var(--muted)]">Transformando vidas em abrigos de Curitiba, Paraná.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <p className="text-[0.8rem] text-[var(--muted)] opacity-50">© 2025 Projeto Fênix · Todos os direitos reservados</p>
          <button
            onClick={() => {
              const shareData = {
                title: document.title || 'Projeto Fênix Hope',
                url: window.location.href
              };
              if (navigator.share) {
                navigator.share(shareData).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
              }
            }}
            className="flex items-center gap-1.5 text-[0.7rem] text-[var(--muted)] opacity-40 hover:opacity-100 transition-opacity p-2 cursor-pointer"
            aria-label="Compartilhar site"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            Compartilhar
          </button>
        </div>
      </div>
    </footer>
  );
}
