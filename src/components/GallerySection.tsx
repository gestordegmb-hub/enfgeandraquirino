import gallery1 from "@/assets/laserterapia.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/ozonioterapia.png";
import gallery5 from "@/assets/prp-prf.png";

const images = [
  { src: gallery1, alt: "Laserterapia em tratamento de feridas" },
  { src: gallery2, alt: "Consulta pré-operatória com Dra. Geandra Quirino" },
  { src: gallery3, alt: "Pós-operatório com Dra. Geandra Quirino" },
  { src: gallery4, alt: "Ozonioterapia com Dra. Geandra Quirino" },
  { src: gallery5, alt: "PRP/PRF com Dra. Geandra Quirino" },
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent font-bold">
            Galeria
          </p>
          <h2 className="section-title">Atendimentos</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "forwards" }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
