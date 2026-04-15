import { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const body = `Olá! Meu nome é ${form.name}.%0A%0A${form.message}${form.phone ? `%0A%0ATelefone: ${form.phone}` : ""}%0AE-mail: ${form.email}`;
    const whatsappUrl = `https://wa.me/5522998088041?text=${body}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      toast({ title: "Redirecionando para o WhatsApp..." });
      setIsSubmitting(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Contato</p>
            <h2 className="section-title">Entre em contato</h2>
            <div className="gold-divider" />
            <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-2xl p-10 shadow-sm border border-border/50">
              <div className="space-y-2">
                <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" /> Nome *
                </label>
                <Input placeholder="Seu nome completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="bg-background border-border/50 focus:border-accent/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" /> E-mail *
                </label>
                <Input type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="bg-background border-border/50 focus:border-accent/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" /> Telefone
                </label>
                <Input type="tel" placeholder="(22) 99999-9999" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="bg-background border-border/50 focus:border-accent/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" /> Mensagem *
                </label>
                <Textarea placeholder="Como posso te ajudar?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={4} className="bg-background border-border/50 focus:border-accent/50 transition-colors resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-bold text-base py-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md">
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
