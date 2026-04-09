import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Gostaria de agendar um atendimento.";

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="gold-divider" />

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
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          Fale comigo no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
