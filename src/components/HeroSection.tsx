import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-end md:pr-[5%] lg:pr-[10%]">
          <div className="w-full md:w-1/2 lg:w-5/12 space-y-8 animate-fade-in text-center md:text-right">
            <div className="gold-divider !mx-auto md:!ml-auto md:!mr-0 !w-20 !h-[2px]" />

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              Especialista em cuidados pós-operatórios e tratamento de feridas
            </h1>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
