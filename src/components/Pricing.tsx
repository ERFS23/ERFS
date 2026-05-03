interface PricingProps {
  onSelectPlan: (qty: string) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const plans = [
    { qty: "1", price: "21,65", total: "259,75", featured: false },
    { qty: "2", price: "43,29", total: "519,50", featured: true },
    { qty: "5", price: "108,23", total: "1.298,75", featured: false },
    { qty: "7", price: "151,52", total: "1.818,25", featured: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-[var(--bg2)] relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Escolha seu plano
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1] text-center reveal">
          E você, quantas vidas<br /><em className="italic">quer transformar?</em>
        </h2>
        <p className="text-[1.05rem] text-[var(--muted)] leading-[1.7] max-w-[540px] mx-auto text-center reveal">
          Pagamento via Cartão ou PIX. Sem boleto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => onSelectPlan(plan.qty)}
              className={`bg-[var(--bg3)] rounded p-8 text-center relative transition-all duration-300 cursor-pointer reveal ${
                plan.featured
                  ? "border border-[var(--gold)] shadow-[0_0_0_1px_rgba(201,150,59,0.3),0_20px_60px_rgba(0,0,0,0.4)] -translate-y-1"
                  : "border border-[rgba(201,150,59,0.15)] hover:border-[var(--gold)] hover:shadow-[0_0_0_1px_rgba(201,150,59,0.3),0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-1"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] text-[var(--bg)] text-[0.7rem] font-semibold tracking-[0.12em] uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Mais Popular
                </div>
              )}
              <div className="font-serif text-[3rem] font-bold text-[var(--gold-light)] leading-none">{plan.qty}</div>
              <span className="text-[0.75rem] text-[var(--muted)] uppercase tracking-[0.1em] block mt-1 mb-5">
                {plan.qty === "1" ? "vida" : "vidas"}
              </span>
              <div className="text-[0.85rem] text-[var(--muted)] mb-1.5">12 parcelas de</div>
              <div className="font-serif text-[1.8rem] font-semibold text-[var(--warm-white)] mb-1">R$ {plan.price}</div>
              <div className="text-[0.8rem] text-[var(--muted)] mb-6">Total: R$ {plan.total}/ano</div>
              <button
                className={`w-full py-3 rounded-sm font-sans text-[0.85rem] font-medium tracking-[0.06em] uppercase transition-all duration-200 ${
                  plan.featured
                    ? "bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] border-transparent text-[var(--bg)]"
                    : "bg-transparent border border-[rgba(201,150,59,0.3)] text-[var(--gold-light)] hover:bg-gradient-to-br hover:from-[var(--gold)] hover:to-[var(--amber)] hover:border-transparent hover:text-[var(--bg)]"
                }`}
              >
                Escolher
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
