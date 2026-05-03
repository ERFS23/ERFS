export default function FinalCta() {
  return (
    <section id="final-cta" className="text-center py-[120px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(201,150,59,0.1),transparent)] pointer-events-none"></div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <h2 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] text-[var(--warm-white)] leading-[1.05] mb-6 reveal">
          52 crianças<br />esperam por<br /><em className="text-[var(--gold-light)]">sua escolha hoje.</em>
        </h2>
        <p className="text-[1.1rem] text-[var(--muted)] max-w-[500px] mx-auto mb-12 leading-[1.7] reveal">
          Por menos de R$1 por dia, você pode ser o padrinho que uma criança vai lembrar para sempre.
        </p>
        <a
          href="#contato"
          className="bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] text-[var(--bg)] font-semibold text-[1.05rem] tracking-[0.04em] px-12 py-[18px] rounded-sm no-underline transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,150,59,0.3)] reveal"
        >
          ✦ Apadrinhar Agora — R$21,65/mês
        </a>
      </div>
    </section>
  );
}
