import { useState } from "react";
import { Stethoscope, HeartPulse, ShieldCheck, Home, GraduationCap, Users, ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WHATSAPP_URL = "https://wa.me/5522998088041?text=Olá! Vim pelo site e gostaria de agendar um atendimento.";

type ServiceDetail = {
  intro?: string;
  items: string[];
  subgroups?: { title: string; items: string[] }[];
  highlight?: string;
};

type Service = {
  icon: typeof Stethoscope;
  title: string;
  description: string;
  detail: ServiceDetail;
};

const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Pré-operatório",
    description: "Preparação completa para sua cirurgia, com orientações personalizadas e avaliação criteriosa para garantir segurança.",
    detail: {
      intro: "Consulta de Enfermagem embasada no Processo de Enfermagem, conforme recomendação do Conselho Federal de Enfermagem (COFEN).",
      items: [
        "Levantamento dos fatores de risco para cicatrização e complicações pós-operatórias",
        "Educação em saúde específica, de acordo com cada tipo de cirurgia, para uma melhor recuperação",
        "Preparo da área a ser operada com tecnologias adjuvantes como laser e ozonioterapia",
        "Preparo sistêmico do corpo com laser e ozônio, para uma melhor resposta ao estresse cirúrgico, com técnicas combinadas que regulam o estresse oxidativo celular e o processo inflamatório sistêmico, reduzem toxinas e oxigenam os tecidos",
      ],
    },
  },
  {
    icon: HeartPulse,
    title: "Pós-operatório",
    description: "Acompanhamento especializado durante toda a recuperação, prevenindo complicações e promovendo cicatrização eficiente.",
    detail: {
      items: [
        "Realizo terapias no intra e no pós-operatório como tapping, laser, ozônio e PRF ou I-PRF",
        "Realizo terapias como a ILIBterapia e a laserpuntura para redução de dor e edema (inchaço)",
        "Disponibilizo equipe treinada para acompanhamento no hospital e em casa",
        "Realizamos visitas para auxílio no banho e lavagem de cabelo com técnica apropriada",
        "Realizamos monitoramento presencial diário ou Telemonitoramento da drenagem do sangue e seroma do dreno, e também faço a retirada segura do seu dreno e dos seus pontos",
        "Avalio de perto qualquer possível intercorrência e emito relatório para seu médico",
      ],
    },
  },
  {
    icon: ShieldCheck,
    title: "Feridas de difícil cicatrização",
    description: "Tratamento avançado com tecnologias de ponta para feridas de difícil cicatrização e/ou de difícil resolução.",
    detail: {
      items: [
        "Realizo avaliação profunda e detalhada, fazendo levantamento de todos os fatores que interferem na cicatrização e atuo nos fatores modificáveis",
        "Aplico o Processo de Enfermagem em todas as etapas, realizando raciocínio e julgamento clínico para o alcance dos melhores resultados",
        "Escolho e utilizo as melhores tecnologias adjuvantes para otimizar a cicatrização de acordo com a fase de cicatrização e a necessidade da ferida",
        "Utilizo tecnologias como laser de baixa intensidade, ozônio, PRP e PRF, terapia por pressão negativa (VAC ou à vácuo), cannabis medicinal e outras terapias",
        "Faço o tratamento com essas terapias combinadas, de maneira assertiva, sem gerar interferência no funcionamento das células",
        "Prescrevo os produtos (coberturas e correlatos) certos de acordo com a avaliação da ferida e respeitando as fases de cicatrização, com o objetivo de acelerar a cicatrização",
      ],
    },
  },
  {
    icon: Home,
    title: "Atendimento domiciliar",
    description: "Comodidade e cuidado no conforto da sua casa, com todo o suporte técnico e humanizado que você merece. Levo até você toda tecnologia de um consultório ou clínica.",
    detail: {
      items: [
        "Realizo atendimento na comodidade de sua casa, reduzindo a necessidade de deslocamento e, consequentemente, o custo indireto para o tratamento",
        "Realizo esse tipo de atendimento principalmente para pessoas restritas ao leito ou acamadas, que tenham dificuldade de se deslocar, mas também para aquelas que optarem por não ir para o consultório.",
        "Realizo esse atendimento para pessoas que têm feridas, estão em pós-operatório, mas também que precisam de tratamento com a Ozonioterapia ou a laserterapia para dor, melhora da imunidade, tratamento coadjuvante do câncer e de doenças autoimunes",
        "Analiso todos os fatores de risco ambientais/domésticos que podem influenciar de maneira negativa para a prevenção de feridas, na cicatrização e na melhora do quadro clínico",
        "Realizo treinamento do cuidador para proporcionar cuidados mais seguros no ambiente de casa",
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "Mentorias e consultorias",
    description: "Capacitação e orientação para profissionais da saúde que desejam aprimorar seus conhecimentos em feridas.",
    detail: {
      items: [
        "Realizo treinamento de equipes de instituições hospitalares para prevenção e cuidados a pessoas com feridas, em pós-operatório e outras situações",
        "Realizo treinamento de equipes de enfermagem, secretarias/assistentes de equipes de cirurgias para proporcionar um cuidado humanizado e seguro",
        "Realizo treinamento de equipes de Instituições de Longa Permanência (ILPIs) para prevenção de riscos de queda e lesão por pressão, assim como as melhores abordagens para tratamento de feridas",
        "Realizo treinamento de equipes de Prefeituras e Instituições Privadas através do projeto “Cia da CicatrizAÇÃO”",
        "Realizo consultoria para implementação de protocolos de prevenção de lesões e tratamento de pessoas com feridas e/ou comissão de pele e curativos",
        "Realizo consultoria de cicatrização para leigos — pacientes e familiares",
        "Realizo mentorias, cursos e consultorias individualizadas para profissionais que desejam maior aprimoramento profissional ou empreender nas áreas de cuidados a pessoas com feridas e cuidados pós-cirúrgicos, tanto em clínicas e consultórios quanto em domicílio",
        "Ensino profissionais de enfermagem a realizar Consulta de Enfermagem presencial e on-line a pessoas com feridas e também doenças crônicas como Diabetes Mellitus (com ênfase à avaliação e cuidados com os pés), Hipertensão Arterial e Insuficiência Cardíaca",
      ],
    },
  },
  {
    icon: Users,
    title: "Acompanhamento pós-operatório hospitalar e domiciliar",
    description: "Equipe de enfermagem treinada para os cuidados no momento mais delicado do pós-cirúrgico, das primeiras semanas até a retirada dos pontos. Também realizo treinamento de equipes para cuidados pós-operatórios seguros.",
    detail: {
      items: [
        "Realizo e ensino cuidados baseados em protocolos/guidelines nacionais e internacionais e também de acordo com as recomendações das equipes cirúrgicas",
      ],
      subgroups: [
        {
          title: "Atuação em diferentes tipos de cirurgia",
          items: [
            "Cirurgias plásticas",
            "Cirurgias cardiovasculares (cardíaca, bypass ou revascularização de membros inferiores, e outras)",
            "Cirurgias gerais",
            "Cirurgias ortopédicas e neurológicas",
            "Cirurgia bariátrica",
            "Cirurgias ginecológicas e obstétricas, como cesariana",
            "Pequenas cirurgias",
            "Outras",
          ],
        },
      ],
      highlight: "Cuido para uma melhor, mais rápida e segura recuperação!",
    },
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? services[openIndex] : null;

  return (
    <section id="servicos" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 md:mb-24">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Serviços</p>
            <h2 className="section-title">Como posso te ajudar</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.08}>
              <div className="group premium-card hover:-translate-y-2 hover:shadow-2xl h-full p-7 sm:p-10 relative overflow-hidden flex flex-col transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-light/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-rose-gold/10 flex items-center justify-center mb-7 group-hover:from-accent/20 group-hover:to-rose-gold/30 group-hover:scale-110 transition-all duration-500 ring-1 ring-rose-gold/20">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-bordo transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-primary mb-4 leading-tight">{service.title}</h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-justify-pretty flex-1">{service.description}</p>
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Ler mais sobre ${service.title}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 self-start px-5 py-3 min-h-[44px] rounded-full font-body text-sm font-semibold text-primary border border-rose-gold/40 bg-background/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group/btn"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 border-rose-gold/30 bg-background">
          {active && (
            <div className="p-6 sm:p-10">
              <DialogHeader className="space-y-4 text-left">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-rose-gold/20 flex items-center justify-center ring-1 ring-rose-gold/30">
                  <active.icon className="w-7 h-7 text-primary" />
                </div>
                <DialogTitle className="font-heading text-2xl sm:text-3xl font-semibold text-gradient-bordo leading-tight pr-8">
                  {active.title}
                </DialogTitle>
                <div className="gold-divider !mx-0 !w-12" />
              </DialogHeader>

              <div className="mt-6 space-y-5">
                {active.detail.intro && (
                  <p className="font-body text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                    {active.detail.intro}
                  </p>
                )}

                <ul className="space-y-3">
                  {active.detail.items.map((item) => (
                    <li key={item} className="flex gap-3 font-body text-sm sm:text-base text-foreground/90 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-gold flex-shrink-0" />
                      <span className="text-justify hyphens-auto">{item}</span>
                    </li>
                  ))}
                </ul>

                {active.detail.subgroups?.map((sg) => (
                  <div key={sg.title} className="space-y-3 pt-2">
                    <p className="font-heading text-base font-semibold text-primary">{sg.title}:</p>
                    <ul className="space-y-2 pl-1">
                      {sg.items.map((it) => (
                        <li key={it} className="flex gap-3 font-body text-sm sm:text-base text-foreground/90 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-rose-gold/70 flex-shrink-0" />
                          <span className="text-justify hyphens-auto">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {active.detail.highlight && (
                  <p className="mt-6 font-heading text-lg sm:text-xl italic text-bordo-light text-center px-2">
                    “{active.detail.highlight}”
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-rose-gold/20 flex justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 min-h-[48px] rounded-full font-body text-sm sm:text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary to-bordo-light shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar consulta
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
