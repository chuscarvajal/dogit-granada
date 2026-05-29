const resenas = [
  { texto: "Great place for dogs to meet friends and to use up their accumulated energy, and most importantly, learn to obey commands. Dogs love this type of training. It's a great atmosphere! And fantastic people.", autor: "Ewa Pater" },
  { texto: "El entrenador tiene una paciencia infinita, mi hija y nuestra perrita disfruta cada momento. Ahora le ve sentido a los lunes. Los compañeros fantásticos y sus perros también.", autor: "Verónica Jiménez" },
  { texto: "Voy todos las semanas. No lo hago para competir, pero mi perro adora y disfrutamos los dos.", autor: "Jonathan C." },
  { texto: "Un sitio increíble donde los perros aprenden disfrutando. El equipo transmite mucha calma y los métodos son completamente positivos. Mi golden ha mejorado muchísimo.", autor: "Sara M." },
];

const Card = ({ texto, autor }: { texto: string; autor: string }) => (
  <div className="w-[340px] shrink-0 bg-white/10 border border-white/15 rounded-2xl p-7 flex flex-col gap-4">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
    <p className="text-white/85 text-[14px] leading-[1.75] italic flex-1">"{texto}"</p>
    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">— {autor} · Reseña en Google</p>
  </div>
);

export default function Testimonials() {
  return (
    <section id="resenas" className="bg-[#1b3d2a] py-20 lg:py-28 overflow-hidden">
      <div className="wrap mb-12 text-center lg:text-left">
        <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">Testimonios</span>
        <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
          14 familias.{" "}
          <span className="text-[#3CB371] italic">4.9 estrellas.</span>
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex gap-5 py-2">
          {[...resenas, ...resenas].map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
