import { UserCheck, RefreshCw, ShieldCheck, Heart, Target, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const differentials = [
  { icon: UserCheck, title: "Atendimento individualizado", description: "Cada paciente é único e recebe um plano de cuidados personalizado" },
  { icon: RefreshCw, title: "Acompanhamento contínuo", description: "Monitoramento constante durante todo o processo de recuperação" },
  { icon: ShieldCheck, title: "Redução de complicações", description: "Protocolos baseados em evidências para minimizar riscos" },
  { icon: Heart, title: "Cuidado técnico e humanizado", description: "Excelência profissional aliada a empatia e acolhimento" },
  { icon: Target, title: "Foco na cicatrização eficiente", description: "Resultados consistentes com as melhores tecnologias disponíveis" },
  { icon: BookOpen, title: "Atualização contínua", description: "Comprometida com o cuidado humano e a docência no ensino superior, está em constante atualização profissional" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 md:mb-24">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Por que escolher</p>
            <h2 className="section-title">Diferenciais</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="group text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary to-rose-soft border border-rose-gold/30 flex items-center justify-center group-hover:border-accent/60 group-hover:shadow-rose-glow group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-11 h-11 text-primary group-hover:text-bordo transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary">{item.title}</h3>
                <p className="font-body text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
