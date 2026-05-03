export default function Story() {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_40%,rgba(201,150,59,0.07),transparent)] pointer-events-none"></div>
      <div className="max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="max-w-[720px]">
          <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 reveal">
            <span className="text-[0.6rem]">✦</span>
            Uma história real
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-8 font-semibold leading-[1.1] reveal">
            Uma criança que queria<br /><em className="italic">ouvir sobre Jesus</em>
          </h2>
          <div className="space-y-5 text-[var(--muted)] leading-[1.8] text-[1rem] reveal">
            <p>Elisa (nome fictício) é uma menina de 5 anos que participa de uma das atividades que realizamos. Em uma tarde de sábado, durante uma das aulas, ela se afastou do grupo e se mostrou introspectiva e triste.</p>
            <p>Percebendo isso, me aproximei para conversar e perguntei por que ela estava chateada. Ela então me disse que se sentia triste porque queria ouvir mais histórias de Jesus, como as que escutava nas tardes de sábado. Porém, em casa, mesmo quando pedia, ninguém contava para ela… porque ninguém conhecia as histórias bíblicas.</p>
            <p>Naquele momento eu a consolei e a acolhi, mas também percebi uma realidade triste: uma criança que deseja ouvir sobre Jesus, mas não tem quem lhe ensine.</p>
            <blockquote className="font-serif text-[1.5rem] italic text-[var(--warm-white)] leading-[1.5] my-8 pl-6 border-l-[3px] border-[var(--gold)]">
              "Com certeza, uma Bíblia ilustrada faria diferença não apenas na vida de Elisa, mas também na vida de sua família."
            </blockquote>
            <p>Muitas vezes, o material impresso chega onde um missionário ou um pregador não consegue chegar. Por isso entendemos como nossa missão fazer esse material chegar às mãos de quem precisa e levar a mensagem do Evangelho aos pequenos corações que estão sedentos para ouvir.</p>
          </div>
          <div className="mt-10 reveal">
            <a
              href="#contato"
              className="bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] text-[var(--bg)] font-semibold text-[0.95rem] tracking-[0.04em] px-9 py-4 rounded-sm no-underline transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,150,59,0.3)]"
            >
              Quero levar essa mensagem →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
