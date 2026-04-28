import aboutPortrait from "@/assets/sobre-profissional.jpeg";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <ScrollReveal>
            <div className="relative max-w-md mx-auto">
              <img
                src={aboutPortrait}
                alt="Geandra Quirino - Enfermeira Especialista"
                className="w-full rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] object-cover aspect-[3/4]"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full border border-accent/40 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-full h-full border border-accent/20 rounded-2xl -z-20" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">
                  Sobre a profissional
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gradient-bordo tracking-tight break-words">
                  Geandra Quirino
                </h2>
                <p className="font-heading text-lg sm:text-xl md:text-2xl text-bordo-light italic">
                  Mestre em Enfermagem Assistencial
                </p>
              </div>

              <div className="gold-divider !mx-0 !w-12" />

              <div className="space-y-6">
                <p className="section-subtitle !max-w-none text-justify-pretty">
                  Com ampla experiência em cuidados pós-operatórios e tratamento avançado de feridas de difícil cicatrização,
                  a Dra. Enfermeira Geandra Quirino oferece um atendimento que une técnica, ciência e cuidado humanizado.
                </p>
                <p className="section-subtitle !max-w-none text-justify-pretty">
                  Sua abordagem é totalmente personalizada, garantindo acompanhamento contínuo e seguro
                  em todas as fases da recuperação, com utilização das mais modernas tecnologias disponíveis.
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
