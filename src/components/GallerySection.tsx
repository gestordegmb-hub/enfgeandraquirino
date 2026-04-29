import gallery1 from "@/assets/laserterapia.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/ozonioterapia.jpg";
import gallery5 from "@/assets/prp-prf.jpg";
import ScrollReveal from "./ScrollReveal";

const images = [
  { src: gallery1, alt: "Laserterapia em tratamento avançado de feridas" },
  { src: gallery2, alt: "Consulta pré-operatória com Dra. Geandra Quirino" },
  { src: gallery3, alt: "Pós-operatório com Dra. Geandra Quirino" },
  { src: gallery4, alt: "Ozonioterapia com Dra. Geandra Quirino" },
  { src: gallery5, alt: "PRP/PRF com Dra. Geandra Quirino" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-20">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-accent font-bold">Galeria</p>
            <h2 className="section-title">Atendimentos</h2>
            <div className="gold-divider" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-premium border border-rose-gold/20 hover:border-rose-gold/50 transition-all duration-700">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 sm:h-96 lg:h-[28rem] object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bordo-deep/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
