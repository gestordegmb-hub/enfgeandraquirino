import aboutPortrait from "@/assets/sobre-profissional.jpeg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src={aboutPortrait}
                alt="Geandra Quirino - Enfermeira Especialista"
                className="w-full max-w-md mx-auto rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] object-cover aspect-[3/4]"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/40 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/20 rounded-2xl -z-20" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">
                  Sobre a profissional
                </p>
                <h2 className="section-title">Geandra Quirino</h2>
                <p className="font-heading text-xl text-marsala-light italic">
                  Mestre em Enfermagem Assistencial
                </p>
              </div>

              <div className="gold-divider !mx-0 !w-12" />

              <div className="space-y-5">
                <p className="section-subtitle !max-w-none">
                  Com ampla experiência em cuidados pós-operatórios e tratamento avançado de feridas complexas,
                  Geandra Quirino dedica sua carreira a oferecer um atendimento que une excelência técnica
                  e cuidado humanizado.
                </p>
                <p className="section-subtitle !max-w-none">
                  Sua abordagem personalizada garante que cada paciente receba um plano de cuidados
                  individualizado, com acompanhamento contínuo durante todo o processo de recuperação,
                  utilizando as mais modernas tecnologias disponíveis.
                </p>
                <p className="section-subtitle !max-w-none">
                  Mestre em Enfermagem Assistencial, atua com foco na prevenção de complicações,
                  promoção da cicatrização eficiente e na segurança do paciente em todas as fases
                  do tratamento.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
