import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg2.png";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--background))]">
      {/* Background image - woman on the left */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dra. Geandra Quirino"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Logo watermark behind the woman */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
        <img src={logo} alt="" className="w-[300px] md:w-[400px] lg:w-[500px] h-auto" />
      </div>

      {/* Gradient overlay - transparent on left, solid on right for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[hsl(var(--background))/95] md:to-[hsl(var(--background))/90]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--background))/30] to-[hsl(var(--background))/98] md:via-[hsl(var(--background))/20] md:to-[hsl(var(--background))/95]" />

      {/* Content - right side */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto flex justify-end">
          <div className="w-full md:w-1/2 lg:w-[45%] space-y-8 animate-fade-in text-right">
            <div className="gold-divider !ml-auto !w-20 !h-[2px]" />

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Especialista em cuidados pós-operatórios e tratamento de feridas
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg ml-auto leading-relaxed">
              Atendimento humanizado e personalizado, com foco na sua recuperação segura e eficiente
            </p>

            <div className="flex justify-end">
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
