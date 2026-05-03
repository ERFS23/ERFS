import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o apadrinhamento?",
      a: "Você escolhe quantas crianças quer apadrinhar, preenche o formulário e é redirecionado para o WhatsApp da nossa equipe. Lá combinamos o método de pagamento (Cartão ou PIX) e você começa a transformar vidas imediatamente."
    },
    {
      q: "Aceitam boleto bancário?",
      a: "Não trabalhamos com boleto bancário. Aceitamos apenas Cartão de Crédito e PIX, o que garante maior segurança e agilidade no processo."
    },
    {
      q: "Como posso acompanhar as doações?",
      a: "Você pode acompanhar as doações, assim como outras ações que realizamos, aqui pelo site ou pelo nosso Instagram @projeto_fenixhope."
    },
    {
      q: "Quando serão entregues os materiais?",
      a: "Entendemos que é importante que todas as crianças recebam sua Bíblia ilustrada, e não queremos deixar nenhuma de fora. Assim, a entrega será realizada quando todas as crianças receberem um apadrinhamento!"
    },
    {
      q: "Posso conhecer a criança que apadrinho?",
      a: "Por razões de proteção e privacidade das crianças, não promovemos encontros presenciais. No entanto, você receberá informações sobre o impacto geral do projeto nas crianças atendidas."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[var(--bg2)]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center reveal">
          <span className="text-[0.6rem]">✦</span>
          Dúvidas frequentes
        </div>
        <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1] text-center reveal">
          Perguntas que<br /><em className="italic">você pode ter</em>
        </h2>
        <div className="mt-12 max-w-[720px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[rgba(201,150,59,0.1)] overflow-hidden reveal">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-5 flex justify-between items-center cursor-pointer text-[1.05rem] text-[var(--warm-white)] gap-4 text-left bg-transparent border-none"
                >
                  <span>{faq.q}</span>
                  <span className={`text-[var(--gold)] text-[1.2rem] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 text-[0.95rem] text-[var(--muted)] leading-[1.7] ${isOpen ? "max-h-[200px] pb-5" : "max-h-0"}`}
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
