const resenas = [
  { texto: "Great place for dogs to meet friends and to use up their accumulated energy. Dogs love this type of training. It's a great atmosphere and fantastic people.", autor: "Ewa Pater" },
  { texto: "El entrenador tiene una paciencia infinita, mi hija y nuestra perrita disfruta cada momento. Ahora le ve sentido a los lunes. Los compañeros fantásticos.", autor: "Verónica Jiménez" },
  { texto: "Voy todas las semanas. No lo hago para competir, pero mi perro adora y disfrutamos los dos.", autor: "Jonathan C." },
  { texto: "Recomendadísimo. El método positivo funciona de verdad y los avances se notan en muy pocas sesiones. Mi golden ha mejorado muchísimo.", autor: "Sara M." },
];

const Card = ({ texto, autor }: { texto: string; autor: string }) => (
  <div className="w-[320px] shrink-0 bg-white/10 border border-white/15 rounded-2xl p-7 flex flex-col gap-5 mx-3">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
    </div>
    <p className="text-white/85 text-[15px] leading-[1.75] italic flex-1">"{texto}"</p>
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">— {autor} · Reseña en Google</p>
  </div>
);

export default function Testimonials() {
  return (
    <section id="resenas" className="py-20 lg:py-28 overflow-hidden" style={{ background: "#2D1A0E" }}>
      <div className="wrap mb-12 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(212,82,42,0.2)", color: "#E8835A" }}>
          Testimonios
        </span>
        <h2 className="text-white leading-tight" style={{ fontSize: "clamp(28px, 4vw, 54px)", fontFamily: "'Playfair Display', serif" }}>
          14 familias.{" "}
          <em className="not-italic" style={{ color: "#D4522A" }}>4.9 estrellas.</em>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="animate-marquee gap-0 py-2">
          {[...resenas, ...resenas].map((r, i) => <Card key={i} {...r} />)}
        </div>
      </div>
    </section>
  );
}
