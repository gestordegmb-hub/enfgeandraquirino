import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Vim pelo site e gostaria de agendar um atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] md:min-h-screen flex items-end md:items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg-mobile md:!bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Premium gradient overlay rosê — keeps face visible, ensures text contrast on mobile */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-background/10 via-background/55 to-background/95 md:from-background/90 md:via-background/55 md:to-background/10" />
      <div className="absolute inset-0 bg-gradient-radial-rose opacity-70" />

      <div className="relative z-10 w-full section-padding pt-32 pb-10 sm:pt-28 md:pt-20 md:pb-0">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start md:pl-[42%] lg:pl-[40%]">
          <div className="w-full md:w-auto max-w-lg space-y-4 sm:space-y-7 animate-fade-in text-center">
            {/* Premium divider */}
            <div className="gold-divider-premium" />

            <h1 className="font-heading text-[1.4rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.2] tracking-normal text-center md:text-left" style={{ wordSpacing: "0.05em", hyphens: "none", overflowWrap: "normal", wordBreak: "keep-all" }}>
              <span className="text-foreground">Especialista em acelerar sua </span>
              <span className="text-gradient-bordo">recuperação pós-operatória</span>
              <span className="text-foreground"> com segurança</span>
            </h1>

            <p className="inline-block font-body text-[0.65rem] sm:text-sm md:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-accent-foreground bg-accent/90 px-3 sm:px-5 py-2 rounded-full shadow-rose-glow max-w-full">
              Tratamento avançado de feridas
            </p>

            <p className="font-body text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed text-center md:text-justify-pretty px-1">
              Atendimento humanizado e personalizado, com foco na sua recuperação segura, eficiente e com acompanhamento especializado.
            </p>

            <div className="flex justify-center pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-premium hover:opacity-95 text-primary-foreground font-body font-bold text-sm sm:text-base md:text-lg px-6 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-premium ring-1 ring-rose-gold/40 max-w-full whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
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
