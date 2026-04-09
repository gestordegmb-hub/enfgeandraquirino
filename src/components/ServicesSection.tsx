import { Stethoscope, HeartPulse, ShieldCheck, Home, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Pré-operatório",
    description: "Preparação completa para sua cirurgia, com orientações personalizadas e avaliação criteriosa para garantir segurança.",
  },
  {
    icon: HeartPulse,
    title: "Pós-operatório",
    description: "Acompanhamento especializado durante toda a recuperação, prevenindo complicações e promovendo cicatrização eficiente.",
  },
  {
    icon: ShieldCheck,
    title: "Feridas de difícil cicatrização",
    description: "Tratamento avançado com tecnologias de ponta para feridas complexas, crônicas e de difícil resolução.",
  },
  {
    icon: Home,
    title: "Atendimento domiciliar",
    description: "Comodidade e cuidado no conforto da sua casa, com todo o suporte técnico e humanizado que você merece.",
  },
  {
    icon: GraduationCap,
    title: "Mentorias e consultorias",
    description: "Capacitação e orientação para profissionais da saúde que desejam aprimorar seus conhecimentos em feridas.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-bold">
            Serviços
          </p>
          <h2 className="section-title">Como posso te ajudar</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
