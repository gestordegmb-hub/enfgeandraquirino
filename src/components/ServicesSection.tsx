import { Stethoscope, HeartPulse, ShieldCheck, Home, GraduationCap, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Stethoscope, title: "Pré-operatório", description: "Preparação completa para sua cirurgia, com orientações personalizadas e avaliação criteriosa para garantir segurança." },
  { icon: HeartPulse, title: "Pós-operatório", description: "Acompanhamento especializado durante toda a recuperação, prevenindo complicações e promovendo cicatrização eficiente." },
  { icon: ShieldCheck, title: "Feridas de difícil cicatrização", description: "Tratamento avançado com tecnologias de ponta para feridas de difícil cicatrização e/ou de difícil resolução." },
  { icon: Home, title: "Atendimento domiciliar", description: "Comodidade e cuidado no conforto da sua casa, com todo o suporte técnico e humanizado que você merece. Levo até você toda tecnologia de um consultório ou clínica." },
  { icon: GraduationCap, title: "Mentorias e consultorias", description: "Capacitação e orientação para profissionais da saúde que desejam aprimorar seus conhecimentos em feridas." },
  { icon: Users, title: "Acompanhamento pós-operatório hospitalar e domiciliar", description: "Equipe de enfermagem treinada para os cuidados no momento mais delicado do pós-cirúrgico, das primeiras semanas até a retirada dos pontos. Também realizo treinamento de equipes para cuidados pós-operatórios seguros." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 md:mb-24">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Serviços</p>
            <h2 className="section-title">Como posso te ajudar</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.08}>
              <div className="group premium-card hover:-translate-y-2 h-full p-7 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-light/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-rose-gold/10 flex items-center justify-center mb-7 group-hover:from-accent/20 group-hover:to-rose-gold/30 group-hover:scale-110 transition-all duration-500 ring-1 ring-rose-gold/20">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-bordo transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-4 leading-tight">{service.title}</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-justify-pretty">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
