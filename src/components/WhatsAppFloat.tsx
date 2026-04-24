import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Vim pelo site e gostaria de agendar um atendimento.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="group fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BD5A] rounded-full p-3 sm:pl-5 sm:pr-6 sm:py-4 shadow-2xl hover:shadow-[0_15px_50px_-10px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-105 animate-float ring-4 ring-white/30"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
      <MessageCircle className="relative w-6 h-6 md:w-7 md:h-7 text-white" />
      <span className="relative font-body font-bold text-sm md:text-base text-white hidden sm:inline">
        Fale comigo
      </span>
    </a>
  );
};

export default WhatsAppFloat;
