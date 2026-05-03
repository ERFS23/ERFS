export default function ContactSection() {
  const directWhatsApp = (phone: string) => {
    const message = "Oii! Vi o Projeto Fênix e quero saber mais sobre como apadrinhar uma criança 🙏";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,150,59,0.05),transparent)] pointer-events-none"></div>
      <div className="max-w-[700px] mx-auto px-6 relative z-[1] text-center">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Fale com a gente
        </div>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--warm-white)] font-semibold mb-4 leading-[1.1] reveal">
          Tem dúvidas? Fale direto<br /><em className="italic text-[var(--gold-light)]">com quem faz acontecer</em>
        </h2>
        <p className="text-[var(--muted)] text-[0.95rem] leading-relaxed mb-10 reveal">Escolha com qual voluntário prefere conversar — ambos estão prontos para te atender pelo WhatsApp.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button onClick={() => directWhatsApp('5519981481280')} className="group relative bg-[var(--bg3)] border border-[rgba(201,150,59,0.2)] rounded-lg p-6 flex items-center gap-4 text-left transition-all duration-300 hover:border-[rgba(37,211,102,0.5)] hover:bg-[rgba(37,211,102,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.12)] reveal">
            <div className="flex-shrink-0">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-23%20%C3%A0%28s%29%2015.10.23_97a0b543-1aHXBEL3pTKSsHnyOzmiIdKwz60P69.jpg" alt="Foto de Elias" className="w-14 h-14 rounded-full object-cover object-top border-2 border-[rgba(201,150,59,0.3)] group-hover:border-[rgba(37,211,102,0.5)] transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[var(--warm-white)] text-[1rem] leading-tight">Elias</div>
              <div className="text-[0.78rem] text-[var(--muted)] mt-0.5">Estudante universitário</div>
              <div className="flex items-center gap-1.5 mt-2">
                <svg className="w-4 h-4 text-[#25d366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="text-[0.78rem] text-[#25d366] font-medium">Chamar no WhatsApp</span>
              </div>
            </div>
          </button>
          <button onClick={() => directWhatsApp('5541991910915')} className="group relative bg-[var(--bg3)] border border-[rgba(201,150,59,0.2)] rounded-lg p-6 flex items-center gap-4 text-left transition-all duration-300 hover:border-[rgba(37,211,102,0.5)] hover:bg-[rgba(37,211,102,0.04)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(37,211,102,0.12)] reveal">
            <div className="flex-shrink-0">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaaaaaa-KjncewpVojbizmG2DQIMPj9yZLcANF.jpeg" alt="Foto de Alissa" className="w-14 h-14 rounded-full object-cover object-top border-2 border-[rgba(201,150,59,0.3)] group-hover:border-[rgba(37,211,102,0.5)] transition-colors duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[var(--warm-white)] text-[1rem] leading-tight">Alissa Nuñez</div>
              <div className="text-[0.78rem] text-[var(--muted)] mt-0.5">Estudante universitária</div>
              <div className="flex items-center gap-1.5 mt-2">
                <svg className="w-4 h-4 text-[#25d366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="text-[0.78rem] text-[#25d366] font-medium">Chamar no WhatsApp</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
