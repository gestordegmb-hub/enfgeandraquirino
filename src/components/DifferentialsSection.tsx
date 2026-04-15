import { UserCheck, RefreshCw, ShieldCheck, Heart, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const differentials = [
  { icon: UserCheck, title: "Atendimento individualizado", description: "Cada paciente é único e recebe um plano de cuidados personalizado" },
  { icon: RefreshCw, title: "Acompanhamento contínuo", description: "Monitoramento constante durante todo o processo de recuperação" },
  { icon: ShieldCheck, title: "Redução de complicações", description: "Protocolos baseados em evidências para minimizar riscos" },
  { icon: Heart, title: "Cuidado técnico e humanizado", description: "Excelência profissional aliada a empatia e acolhimento" },
  { icon: Target, title: "Cicatrização eficiente", description: "Foco em resultados com as melhores tecnologias disponíveis" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-20">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Por que escolher</p>
            <h2 className="section-title">Diferenciais</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {differentials.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="group text-center space-y-5">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary border border-border/50 flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-md transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
