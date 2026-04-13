import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Subtle gradient overlay for text readability on right side */}
      <div className="absolute inset-0 bg-gradient-to-l from-background/70 via-background/30 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <div className="w-full md:w-[45%] lg:w-[38%] space-y-6 animate-fade-in text-right">
            {/* Gold accent line */}
            <div className="w-16 h-[2px] bg-accent ml-auto" />

            <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-foreground leading-[1.2] tracking-tight">
              Especialista em cuidados pós-operatórios e tratamento de feridas
            </h1>

            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
              Atendimento humanizado e personalizado, com foco na sua recuperação segura e eficiente
            </p>

            <div className="flex justify-end pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar consulta
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
