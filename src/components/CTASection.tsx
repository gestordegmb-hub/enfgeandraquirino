import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-premium text-center relative overflow-hidden">
      {/* Decorative rose glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-rose/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-rose-gold/10 blur-3xl pointer-events-none" />

      <ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-10 relative z-10">
          <div className="gold-divider-premium" />

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-tight">
            Agende seu atendimento <span className="text-rose-light italic">especializado</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Receba um acompanhamento profissional, humanizado e focado na sua recuperação completa.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pulse inline-flex items-center gap-4 bg-accent hover:bg-rose-light text-accent-foreground font-body font-bold text-lg md:text-xl px-16 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-rose-glow ring-2 ring-rose-gold/40"
          >
            <MessageCircle className="w-7 h-7" />
            Falar no WhatsApp
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
