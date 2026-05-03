import { motion } from "motion/react";

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[var(--bg)] overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center"
        >
          <div className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-4 flex items-center gap-3 justify-center">
            <span className="text-[0.6rem]">✦</span>
            Quem está por trás
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] text-[var(--warm-white)] mb-5 font-semibold leading-[1.1]">
            Conheça nossa<br /><em className="italic">equipe de voluntários</em>
          </h2>
          <p className="text-[1.05rem] text-[var(--muted)] leading-[1.7] max-w-[540px] mx-auto">
            Dedicados a alcançar e transformar vidas, levando o amor de Jesus para crianças!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-[800px] mx-auto" style={{ perspective: "1000px" }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 100, rotateY: -30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateY: 0, 
                transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } 
              },
              hover: {
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }
            }}
            className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.15)] rounded overflow-hidden z-10 flex flex-col"
          >
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[var(--bg3)] to-[#2a1f12] overflow-hidden relative">
              <motion.img
                variants={{
                  hidden: { scale: 0, rotate: 360 },
                  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 } },
                  hover: { scale: 1.1, rotate: 0, transition: { duration: 0.3 } }
                }}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-02-23%20%C3%A0%28s%29%2015.10.23_97a0b543-1aHXBEL3pTKSsHnyOzmiIdKwz60P69.jpg"
                alt="Foto de Elias Serrano"
                className="w-full h-full object-cover object-top"
              />
              <motion.div variants={{ hover: { opacity: 1 } }} className="absolute inset-0 bg-black/20 opacity-0 pointer-events-none transition-opacity duration-300" />
            </div>
            <motion.div variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="p-6 border-t-2 border-[var(--gold)] relative bg-[var(--bg3)] flex-1">
              <div className="font-serif text-[1.5rem] font-semibold text-[var(--warm-white)] mb-1">Elias Serrano</div>
              <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="inline-block text-[0.75rem] text-[var(--gold)] uppercase tracking-[0.15em] mb-3 origin-left">
                ✦ Estudante de Direito no UNAS-EC
              </motion.div>
              <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed">
                Dedica suas férias e tempo livre ao Projeto Fênix, levando esperança e amor às crianças nas casas lares de Curitiba.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, y: 100, rotateY: -30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateY: 0, 
                transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2, delay: 0.2 } 
              },
              hover: {
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
              }
            }}
            className="bg-[var(--bg3)] border border-[rgba(201,150,59,0.15)] rounded overflow-hidden z-10 flex flex-col"
          >
            <div className="w-full aspect-[3/4] bg-gradient-to-br from-[var(--bg3)] to-[#2a1f12] overflow-hidden relative">
              <motion.img
                variants={{
                  hidden: { scale: 0, rotate: 360 },
                  visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 60, damping: 15, duration: 1 } },
                  hover: { scale: 1.1, rotate: 0, transition: { duration: 0.3 } }
                }}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaaaaaaa-KjncewpVojbizmG2DQIMPj9yZLcANF.jpeg"
                alt="Foto de Alissa Nuñez"
                className="w-full h-full object-cover object-top"
              />
              <motion.div variants={{ hover: { opacity: 1 } }} className="absolute inset-0 bg-black/20 opacity-0 pointer-events-none transition-opacity duration-300" />
            </div>
            <motion.div variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="p-6 border-t-2 border-[var(--gold)] relative bg-[var(--bg3)] flex-1">
              <div className="font-serif text-[1.5rem] font-semibold text-[var(--warm-white)] mb-1">Alissa Nuñez</div>
              <motion.div variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } } }} className="inline-block text-[0.75rem] text-[var(--gold)] uppercase tracking-[0.15em] mb-3 origin-left">
                ✦ Estudante de Medicina na UAP-ARS
              </motion.div>
              <p className="text-[0.875rem] text-[var(--muted)] leading-relaxed">
                Lidera projetos missionários com crianças desde 2024, entende a missão como seu chamado e propósito de vida. Entende a oportunidade de servir como um privilégio.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
