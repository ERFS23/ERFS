export default function UrgencyStrip() {
  return (
    <div id="urgency-strip" className="bg-gradient-to-r from-[#1a1208] via-[#201810] to-[#1a1208] border-t border-b border-[rgba(201,150,59,0.2)] py-5">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="font-serif text-[2rem] font-bold text-[var(--gold-light)]">6</div>
            <div className="text-[0.85rem] text-[var(--muted)]">Já felizes e apadrinhados</div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[rgba(201,150,59,0.2)]"></div>
          <div className="text-center flex-1 max-w-[500px] w-full order-last sm:order-none mt-4 sm:mt-0">
            <div className="px-2 sm:px-6">
              <div className="flex justify-between text-[0.8rem] text-[var(--muted)] mb-2">
                <span>Progresso em 2025</span>
                <span>6 de 58</span>
              </div>
              <div className="w-full h-1.5 bg-[rgba(201,150,59,0.12)] rounded-sm overflow-hidden">
                <div id="progress-bar" className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] rounded-sm relative transition-all duration-[2000ms]" style={{ width: '0%' }}>
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.3)] animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[rgba(201,150,59,0.2)]"></div>
          <div className="text-center">
            <div className="font-serif text-[2rem] font-bold text-[var(--gold-light)]">52</div>
            <div className="text-[0.85rem] text-[var(--muted)]">Aguardando</div>
          </div>
        </div>
      </div>
    </div>
  );
}
