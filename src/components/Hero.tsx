import { motion } from "motion/react";

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 } 
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30, x: -30 },
  visible: { opacity: 1, y: 0, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

const actionVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  }
};

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: "easeOut" } 
  }
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-[120px] pb-20">
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1] bg-[#000]"
        style={{ willChange: "transform, opacity" }}
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <iframe
          className="absolute top-1/2 left-1/2 w-[150vw] h-[84.375vw] min-h-[150vh] min-w-[266.66vh] -translate-x-1/2 -translate-y-1/2 opacity-100 pointer-events-none select-none object-cover"
          src="https://www.youtube.com/embed/Kx06hkLJm_o?autoplay=1&mute=1&controls=0&loop=1&playlist=Kx06hkLJm_o&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
          title="Background Video"
          allow="autoplay; encrypted-media"
          tabIndex={-1}
        ></iframe>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(201,150,59,0.12),transparent),radial-gradient(ellipse_40%_60%_at_30%_60%,rgba(176,58,46,0.08),transparent),var(--bg)] mix-blend-multiply sm:opacity-30"></div>
        <div className="absolute inset-0 bg-[var(--bg)] opacity-30"></div>
      </motion.div>
      <motion.div 
        className="max-w-[1100px] mx-auto px-6 relative z-[2]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.5 }
          }
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
          <div className="text-center lg:text-left">
            <motion.div variants={subtitleVariants} className="text-[0.8rem] tracking-[0.2em] uppercase text-[var(--gold)] mb-5 flex items-center gap-3 justify-center lg:justify-start">
              <span className="block w-8 h-px bg-[var(--gold)]"></span>
              Curitiba, Paraná · Projeto Social
            </motion.div>
            <motion.h1 variants={titleVariants} className="font-serif text-[clamp(3rem,5.5vw,5.2rem)] text-[var(--warm-white)] mb-6 leading-[1.1] font-semibold">
              Uma criança espera<br />
              por <em className="text-[var(--gold-light)] italic">você</em> hoje.
            </motion.h1>
            <motion.p variants={subtitleVariants} className="text-[1.15rem] text-[var(--warm-white)] drop-shadow-md leading-[1.7] mb-9 max-w-[480px] mx-auto lg:mx-0">
              58 crianças em abrigos de Curitiba aguardam um padrinho. Seu apoio mensal transforma vidas com material educativo, espiritual e afeto.
            </motion.p>
            <motion.div variants={actionVariants} className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <a
                href="#contato"
                className="bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] text-[var(--bg)] font-semibold text-[0.95rem] tracking-[0.04em] px-9 py-4 rounded-sm no-underline transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,150,59,0.3)]"
              >
                ✦ Apadrinhar uma Criança
              </a>
              <a
                href="#contato"
                className="text-[var(--text)] text-[0.9rem] px-5 py-4 rounded-sm no-underline border border-[rgba(201,150,59,0.25)] transition-all duration-200 inline-flex items-center gap-2 hover:border-[var(--gold)] hover:text-[var(--gold-light)] bg-black/20 backdrop-blur-sm"
              >
                Falar com a equipe →
              </a>
            </motion.div>
            <motion.div variants={statsVariants} className="flex gap-8 mt-10 pt-8 border-t border-[rgba(201,150,59,0.15)] justify-center lg:justify-start">
              <div>
                <div className="font-serif text-[2.4rem] font-bold text-[var(--gold-light)] leading-none drop-shadow-md">58</div>
                <div className="text-[0.8rem] text-[var(--text)] drop-shadow-sm uppercase tracking-[0.05em] mt-1">Crianças no projeto</div>
              </div>
              <div>
                <div className="font-serif text-[2.4rem] font-bold text-[var(--gold-light)] leading-none drop-shadow-md">8</div>
                <div className="text-[0.8rem] text-[var(--text)] drop-shadow-sm uppercase tracking-[0.05em] mt-1">Casas atendidas</div>
              </div>
              <div>
                <div className="font-serif text-[2.4rem] font-bold text-[var(--gold-light)] leading-none drop-shadow-md">52</div>
                <div className="text-[0.8rem] text-[var(--text)] drop-shadow-sm uppercase tracking-[0.05em] mt-1">Aguardando padrinho</div>
              </div>
            </motion.div>
          </div>
          <motion.div variants={imageVariants} className="flex justify-center relative">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute -inset-4 bg-[radial-gradient(circle_at_center,rgba(201,150,59,0.2),transparent_70%)] rounded-2xl"></div>
              <div className="relative z-[2] rounded-xl overflow-hidden border border-[rgba(201,150,59,0.3)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/uEFLSkLjTwE?rel=0&modestbranding=1"
                    title="Projeto Fênix - Vídeo institucional"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-[var(--bg3)] border border-[rgba(201,150,59,0.3)] rounded-lg px-4 py-2.5 flex items-center gap-2.5 text-[0.8rem] z-10 whitespace-nowrap backdrop-blur-lg">
                <div className="w-2 h-2 rounded-full bg-[#4caf50] shadow-[0_0_0_3px_rgba(76,175,80,0.2)] animate-pulse-dot flex-shrink-0"></div>
                <span>6 apadrinhadas este mes</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-[var(--bg3)] border border-[rgba(201,150,59,0.3)] rounded-lg px-4 py-2.5 flex items-center gap-2.5 text-[0.8rem] z-10 whitespace-nowrap backdrop-blur-lg">
                <span className="text-[var(--gold)]">52</span>
                <span>aguardando padrinho</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
