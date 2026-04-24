import { Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-premium section-padding !py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rose-gold/60 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-center text-center md:text-left">
          <div>
            <img src={logo} alt="Geandra Quirino" className="h-14 w-auto mx-auto md:mx-0 brightness-0 invert opacity-70" />
          </div>

          <div className="space-y-4">
            <a
              href="tel:+5522998088041"
              className="flex items-center gap-3 justify-center md:justify-start text-primary-foreground/70 hover:text-accent transition-colors duration-300 font-body text-sm"
            >
              <Phone className="w-4 h-4" />
              (22) 99808-8041
            </a>
            <a
              href="https://instagram.com/enfa.geandraquirino"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center md:justify-start text-primary-foreground/70 hover:text-accent transition-colors duration-300 font-body text-sm"
            >
              <Instagram className="w-4 h-4" />
              @enfa.geandraquirino
            </a>
          </div>

          <div className="md:text-right">
            <p className="font-body text-sm text-primary-foreground/40 leading-relaxed">
              Cuidado especializado em tratamento avançado de feridas e acompanhamento pós-operatório com excelência e humanização.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-10 pt-10 text-center">
          <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
            © {new Date().getFullYear()} Geandra Quirino — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
