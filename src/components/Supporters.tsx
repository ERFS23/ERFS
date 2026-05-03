export default function Supporters() {
  return (
    <section id="apoiadores" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_60%,rgba(201,150,59,0.06),transparent)] pointer-events-none"></div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Nossos Apoiadores
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-12 font-semibold leading-[1.1] text-center reveal">
          Quem acredita na<br /><em className="italic text-[var(--gold-light)]">nossa missão</em>
        </h2>
        
        <div className="flex justify-center reveal">
          <div className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.15)] rounded-lg overflow-hidden transition-all duration-300 hover:border-[rgba(201,150,59,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-[360px] w-full">
            <div className="w-full bg-[#0a0806] relative aspect-[9/16]">
              <iframe
                src="https://drive.google.com/file/d/1AHOs9z-qmzxEDDvWhb1QxMzns_6tkr1b/preview"
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Mensagem do Pastor Luiz Sayão"
              ></iframe>
            </div>
            <div className="p-6 text-center border-t-2 border-[var(--gold)]">
              <div className="font-serif text-[1.5rem] font-semibold text-[var(--warm-white)] mb-1">Pr Roberto Silvado</div>
              <div className="text-[0.75rem] text-[var(--gold)] uppercase tracking-[0.15em] mb-3">✦ Apoiador do Projeto</div>
              <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed">
                Apoiando o projeto de Bíblias ilustradas para o Lar Batista Esperança.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
