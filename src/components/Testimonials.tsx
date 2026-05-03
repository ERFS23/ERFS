export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Depoimentos
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1] text-center reveal">
          O que dizem nossos<br /><em className="italic">padrinhos e madrinhas</em>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 max-w-[900px] mx-auto">
          <div className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.12)] rounded p-8 transition-all duration-700 reveal">
            <div className="text-[var(--gold)] text-[0.85rem] tracking-[2px] mb-4">★★★★★</div>
            <p className="font-serif italic text-[1.15rem] text-[var(--warm-white)] leading-[1.6] mb-5">
              "Participo desse projeto por ver um sentido de eternidade, pode propiciar para essas crianças um instrumento que pode refletir seus futuros eternos, que as palavras que aprenderem podem guiar seus futuros e decisões."
            </p>
            <div className="text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--bg)] to-[#3d2c1a] border border-[var(--gold)] flex items-center justify-center text-[0.7rem] text-[var(--gold-light)] font-serif italic flex-shrink-0">M</div>
              <span>Maria Leonor · Curitiba, Paraná</span>
            </div>
          </div>
          <div className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.12)] rounded p-8 transition-all duration-700 reveal">
            <div className="text-[var(--gold)] text-[0.85rem] tracking-[2px] mb-4">★★★★★</div>
            <p className="font-serif italic text-[1.15rem] text-[var(--warm-white)] leading-[1.6] mb-5">
              "Sempre que é para ajudar alguém e para que alguém venha a conhecer Jesus por uma ajuda que é dada, eu acho importante participar. Faz parte da obra do Reino de Deus facilitar para que crianças tenham um encontro com Jesus."
            </p>
            <div className="text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--bg)] to-[#3d2c1a] border border-[var(--gold)] flex items-center justify-center text-[0.7rem] text-[var(--gold-light)] font-serif italic flex-shrink-0">J</div>
              <span>Juan Nelber · Curitiba, Paraná</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
