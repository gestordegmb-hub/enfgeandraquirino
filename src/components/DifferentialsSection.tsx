import { UserCheck, RefreshCw, ShieldCheck, Heart, Target } from "lucide-react";

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
        <div className="text-center space-y-4 mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-bold">
            Por que escolher
          </p>
          <h2 className="section-title">Diferenciais</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="text-center space-y-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
