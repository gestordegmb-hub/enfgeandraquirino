import { Stethoscope, HeartPulse, ShieldCheck, Home, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Stethoscope, title: "Pré-operatório", description: "Preparação completa para sua cirurgia, com orientações personalizadas e avaliação criteriosa para garantir segurança." },
  { icon: HeartPulse, title: "Pós-operatório", description: "Acompanhamento especializado durante toda a recuperação, prevenindo complicações e promovendo cicatrização eficiente." },
  { icon: ShieldCheck, title: "Feridas de difícil cicatrização", description: "Tratamento avançado com tecnologias de ponta para feridas de difícil cicatrização, crônicas e de difícil resolução." },
  { icon: Home, title: "Atendimento domiciliar", description: "Comodidade e cuidado no conforto da sua casa, com todo o suporte técnico e humanizado que você merece." },
  { icon: GraduationCap, title: "Mentorias e consultorias", description: "Capacitação e orientação para profissionais da saúde que desejam aprimorar seus conhecimentos em feridas." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-20">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Serviços</p>
            <h2 className="section-title">Como posso te ajudar</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.08}>
              <div className="group premium-card hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
