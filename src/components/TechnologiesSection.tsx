import { Zap, Wind, Layers, Droplets, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const technologies = [
  { icon: Zap, title: "Laserterapia", description: "Estimulação celular para aceleração da cicatrização" },
  { icon: Wind, title: "Ozonioterapia", description: "Terapia com ozônio para ação antimicrobiana e regenerativa" },
  { icon: Layers, title: "Coberturas tecnológicas", description: "Curativos avançados de última geração" },
  { icon: Droplets, title: "PRP / PRF", description: "Fibrina Rica em Plaquetas e outras terapias regenerativas" },
  { icon: Sparkles, title: "Terapias avançadas", description: "Protocolos inovadores baseados em evidências científicas" },
];

const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="section-padding bg-gradient-premium relative overflow-hidden">
      {/* Subtle decorative glows to soften the bordô background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-rose-gold/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-24">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Tecnologia</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">Tecnologias utilizadas</h2>
            <div className="gold-divider-premium" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <ScrollReveal key={tech.title} delay={index * 0.08}>
              <div className="group text-center space-y-5 p-8 rounded-2xl border border-primary-foreground/15 hover:border-rose-gold/50 bg-primary-foreground/8 hover:bg-primary-foreground/12 backdrop-blur-sm transition-all duration-500 h-full hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-gold/25 to-rose/20 flex items-center justify-center group-hover:scale-110 group-hover:from-rose-gold/40 transition-all duration-500 ring-1 ring-rose-gold/30">
                  <tech.icon className="w-8 h-8 text-rose-light" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-foreground">{tech.title}</h3>
                <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">{tech.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
