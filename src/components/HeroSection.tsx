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

      {/* Premium gradient overlay rosê */}
      <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial-rose opacity-60" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start md:pl-[42%] lg:pl-[40%]">
          <div className="w-full md:w-auto max-w-md space-y-6 animate-fade-in text-center">
            {/* Premium divider */}
            <div className="gold-divider-premium" />

            <h1 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.2] tracking-normal text-left" style={{ wordSpacing: "0.15em" }}>
              <span className="text-foreground">Especialista em </span>
              <span className="text-gradient-bordo">cuidados pós-operatórios</span>
              <span className="text-foreground"> e tratamento avançado de feridas</span>
            </h1>

            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed text-left">
              Atendimento humanizado e personalizado, com foco na sua recuperação segura e eficiente
            </p>

            <div className="flex justify-center pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-premium hover:opacity-95 text-primary-foreground font-body font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-premium"
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
