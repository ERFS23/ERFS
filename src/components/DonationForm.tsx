import { useEffect, useState, useRef } from "react";

interface DonationFormProps {
  selectedPlan: string;
  onChangePlan: (plan: string) => void;
}

export default function DonationForm({ selectedPlan, onChangePlan }: DonationFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("Cartão");
  const [showPicker, setShowPicker] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sendWhatsApp = (number: string) => {
    const qtyTextCrianças = selectedPlan === "1" ? "criança" : "crianças";
    const qtyTextVidas = selectedPlan === "1" ? "vida" : "vidas";
    const methodText = paymentMethod === "Cartão" ? "cartão" : "pix";
    const nameText = name ? ` (Me chamo ${name})` : "";
    const msg = `Oii, quero abençoar ${selectedPlan} ${qtyTextCrianças}!! Vou fazer pelo ${methodText}${nameText}, vamos fazer a diferença, ${selectedPlan} ${qtyTextVidas} de cada vez`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank");
    setShowPicker(false);
  };

  return (
    <section id="donation-form" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,150,59,0.06),transparent)] pointer-events-none"></div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Formulário de apadrinhamento
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1] text-center reveal">
          Toque uma vida<br /><em className="italic">agora mesmo</em>
        </h2>
        <div
          id="form-container"
          className="max-w-[600px] mx-auto mt-10 md:mt-14 bg-[var(--bg3)] border border-[rgba(201,150,59,0.2)] rounded-md p-6 sm:p-8 md:p-12 relative z-[1] transition-shadow duration-500 reveal"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4 sm:mb-5">
              <label className="block text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-2">Seu Nome</label>
              <input
                type="text"
                placeholder="Maria José"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,150,59,0.15)] rounded-sm px-4 py-3 min-h-[48px] text-[var(--text)] font-sans text-[0.95rem] outline-none transition-all duration-200 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,150,59,0.1)]"
              />
            </div>
            <div className="mb-5">
              <label className="block text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-2">Seu WhatsApp</label>
              <input
                type="tel"
                placeholder="(41) 99999-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,150,59,0.15)] rounded-sm px-4 py-3 min-h-[48px] text-[var(--text)] font-sans text-[0.95rem] outline-none transition-all duration-200 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,150,59,0.1)]"
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-2">Quantas crianças quer apadrinhar?</label>
            <select
              value={selectedPlan}
              onChange={(e) => onChangePlan(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(201,150,59,0.15)] rounded-sm px-4 py-3 min-h-[48px] text-[var(--text)] font-sans text-[0.95rem] outline-none transition-all duration-200 focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(201,150,59,0.1)] appearance-none cursor-pointer text-ellipsis overflow-hidden whitespace-nowrap"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%238a7a68' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem"
              }}
            >
              <option value="1" className="bg-[#1a1510]">1 criança — 12x R$ 21,65</option>
              <option value="2" className="bg-[#1a1510]">2 crianças — 12x R$ 43,29</option>
              <option value="5" className="bg-[#1a1510]">5 crianças — 12x R$ 108,23</option>
              <option value="7" className="bg-[#1a1510]">7 crianças — 12x R$ 151,52</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-[0.8rem] text-[var(--muted)] uppercase tracking-[0.1em] mb-2">Forma de pagamento</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("Cartão")}
                className={`py-3.5 min-h-[48px] border rounded-sm text-center cursor-pointer transition-all duration-200 text-[0.9rem] flex items-center justify-center gap-2 ${
                  paymentMethod === "Cartão"
                    ? "border-[var(--gold)] bg-[rgba(201,150,59,0.08)] text-[var(--gold-light)]"
                    : "border-[rgba(201,150,59,0.15)] text-[var(--muted)] hover:border-[rgba(201,150,59,0.4)] hover:text-[var(--text)]"
                }`}
              >
                💳 Cartão de Crédito
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("PIX")}
                className={`py-3.5 min-h-[48px] border rounded-sm text-center cursor-pointer transition-all duration-200 text-[0.9rem] flex items-center justify-center gap-2 ${
                  paymentMethod === "PIX"
                    ? "border-[var(--gold)] bg-[rgba(201,150,59,0.08)] text-[var(--gold-light)]"
                    : "border-[rgba(201,150,59,0.15)] text-[var(--muted)] hover:border-[rgba(201,150,59,0.4)] hover:text-[var(--text)]"
                }`}
              >
                ⚡ PIX
              </button>
            </div>
          </div>
          <div className="relative w-full" ref={pickerRef}>
            <button
              onClick={() => setShowPicker(!showPicker)}
              className="w-full py-4 min-h-[48px] bg-gradient-to-br from-[#25d366] to-[#128c7e] border-none rounded-sm text-white font-sans text-[0.95rem] sm:text-[1rem] font-semibold cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 tracking-[0.02em] hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(37,211,102,0.25)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Continuar pelo WhatsApp
            </button>
            {showPicker && (
              <div className="absolute bottom-full left-0 right-0 mb-3 bg-[#1c1610] border border-[rgba(201,150,59,0.3)] rounded-md shadow-[0_16px_48px_rgba(0,0,0,0.5)] z-50 overflow-hidden animate-fade-in">
                <p className="text-[0.75rem] text-[var(--muted)] uppercase tracking-[0.15em] px-5 pt-4 pb-2">Com quem você quer falar?</p>
                <button onClick={() => sendWhatsApp("5519981481280")} className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors duration-150 hover:bg-[rgba(201,150,59,0.08)] border-b border-[rgba(201,150,59,0.08)] group">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-23%20%C3%A0%28s%29%2015.10.23_97a0b543-1aHXBEL3pTKSsHnyOzmiIdKwz60P69.jpg" alt="Elias Serrano" className="w-11 h-11 rounded-full object-cover object-top border-2 border-[rgba(201,150,59,0.2)] group-hover:border-[var(--gold)] transition-colors duration-150 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[var(--warm-white)] font-semibold text-[0.9rem] leading-tight">Elias Serrano</div>
                    <div className="text-[var(--muted)] text-[0.75rem]">Estudante universitário</div>
                  </div>
                  <svg className="w-4 h-4 text-[#25d366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span className="text-[0.78rem] text-[#25d366] font-medium">Chamar no WhatsApp</span>
                </button>
                <button onClick={() => sendWhatsApp("5541991910915")} className="w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors duration-150 hover:bg-[rgba(201,150,59,0.08)] border-b border-[rgba(201,150,59,0.08)] last:border-b-0 group">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaaaaaa-KjncewpVojbizmG2DQIMPj9yZLcANF.jpeg" alt="Alissa Nuñez" className="w-11 h-11 rounded-full object-cover object-top border-2 border-[rgba(201,150,59,0.2)] group-hover:border-[var(--gold)] transition-colors duration-150 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[var(--warm-white)] font-semibold text-[0.9rem] leading-tight">Alissa Nuñez</div>
                    <div className="text-[var(--muted)] text-[0.75rem]">Estudante universitária</div>
                  </div>
                  <svg className="w-4 h-4 text-[#25d366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span className="text-[0.78rem] text-[#25d366] font-medium">Chamar no WhatsApp</span>
                </button>
              </div>
            )}
          </div>
          <p className="text-center text-[0.8rem] text-[var(--muted)] mt-4">🔒 Seus dados são protegidos. Sem boleto — apenas Cartão e PIX.</p>
        </div>
      </div>
    </section>
  );
}
