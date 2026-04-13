import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/50" />

      <div className="relative z-10 section-padding text-center max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="gold-divider !mx-auto !w-20 !h-[2px]" />

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight tracking-tight">
            Especialista em cuidados pós-operatórios e tratamento de feridas
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Atendimento humanizado e personalizado, com foco na sua recuperação segura e eficiente
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar consulta
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
