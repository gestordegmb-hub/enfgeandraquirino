import { Zap, Wind, Layers, Droplets, Sparkles } from "lucide-react";

const technologies = [
  { icon: Zap, title: "Laserterapia", description: "Estimulação celular para aceleração da cicatrização" },
  { icon: Wind, title: "Ozonioterapia", description: "Terapia com ozônio para ação antimicrobiana e regenerativa" },
  { icon: Layers, title: "Coberturas tecnológicas", description: "Curativos avançados de última geração" },
  { icon: Droplets, title: "PRP / PRF", description: "Plasma rico em plaquetas para regeneração tecidual" },
  { icon: Sparkles, title: "Terapias avançadas", description: "Protocolos inovadores baseados em evidências científicas" },
];

const TechnologiesSection = () => {
  return (
    <section id="tecnologias" className="section-padding bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-bold">
            Tecnologia
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">
            Tecnologias utilizadas
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="group text-center space-y-4 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground">
                {tech.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
