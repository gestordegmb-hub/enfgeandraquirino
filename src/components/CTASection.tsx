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

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">
            Agende seu atendimento
          </h2>

          <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Entre em contato pelo WhatsApp e receba um atendimento personalizado para suas necessidades.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-lg px-14 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-rose-glow"
          >
            <MessageCircle className="w-6 h-6" />
            Fale comigo no WhatsApp
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CTASection;
