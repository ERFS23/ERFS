export default function Offerings() {
  const cards = [
    {
      icon: "📚",
      title: "Nosso Amiguinho",
      desc: "Revista educativa e espiritual voltada para crianças, com histórias, lições e atividades interativas mensais."
    },
    {
      icon: "✝️",
      title: "Bíblia Ilustrada",
      desc: "Bíblia especialmente desenvolvida para crianças, com ilustrações coloridas e linguagem acessível."
    },
    {
      icon: "🌱",
      title: "Alimento Espiritual",
      desc: "Devocionais e histórias bíblicas adaptadas para despertar valores e fé no coração das crianças."
    },
    {
      icon: "👼",
      title: "Oferta do Anjo",
      desc: "Contribuição especial para quem quer fazer a diferença além do apadrinhamento. Serve para cobrir os custos do projeto e levar presentes às crianças junto com a entrega dos materiais."
    },
    {
      icon: "🎉",
      title: "Eventos Especiais",
      desc: "Participação em celebrações, atividades recreativas e momentos especiais que criam memórias preciosas."
    }
  ];

  return (
    <section id="offerings" className="py-24 bg-[var(--bg2)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 reveal">
          <span className="text-[0.6rem]">✦</span>
          O que seu apoio entrega
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1] reveal">
          Tudo que uma criança<br /><em className="italic">precisa para florescer</em>
        </h2>
        <p className="text-[1.05rem] text-[var(--muted)] leading-[1.7] max-w-[540px] reveal">
          Cada apadrinhamento inclui materiais cuidadosamente escolhidos para o desenvolvimento integral da criança.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {cards.map((card, i) => (
            <div key={i} className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.12)] rounded p-7 transition-all duration-300 relative overflow-hidden group hover:border-[rgba(201,150,59,0.3)] hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] reveal">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              <span className="text-[1.8rem] block mb-4">{card.icon}</span>
              <div className="font-serif text-[1.3rem] font-semibold text-[var(--warm-white)] mb-2">{card.title}</div>
              <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
