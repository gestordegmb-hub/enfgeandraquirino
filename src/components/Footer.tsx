import { Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground section-padding !py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <img src={logo} alt="Geandra Quirino" className="h-14 w-auto mx-auto md:mx-0 brightness-0 invert opacity-80" />
          </div>

          <div className="space-y-3">
            <a
              href="tel:+5522998088041"
              className="flex items-center gap-2 justify-center md:justify-start text-primary-foreground/80 hover:text-accent transition-colors font-body"
            >
              <Phone className="w-4 h-4" />
              (22) 99808-8041
            </a>
            <a
              href="https://instagram.com/enfa.geandraquirino"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center md:justify-start text-primary-foreground/80 hover:text-accent transition-colors font-body"
            >
              <Instagram className="w-4 h-4" />
              @enfa.geandraquirino
            </a>
          </div>

          <div className="md:text-right">
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              Cuidado especializado em tratamento de feridas e acompanhamento pós-operatório com excelência e humanização.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Geandra Quirino — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
