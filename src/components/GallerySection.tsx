import gallery1 from "@/assets/laserterapia.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/ozonioterapia.png";
import gallery5 from "@/assets/prp-prf.png";
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl border border-border/30 hover:border-accent/20 transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[28rem] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
