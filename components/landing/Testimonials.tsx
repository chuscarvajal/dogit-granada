const resenas = [
  {
    texto: "Great place for dogs to meet friends and to use up their accumulated energy, and most importantly, learn to obey commands. Dogs love this type of training. It's a great atmosphere! And fantastic people.",
    autor: "Ewa Pater",
    rol: "Reseña de Google Maps",
  },
  {
    texto: "El entrenador tiene una paciencia infinita, mi hija y nuestra perrita disfruta cada momento. Ahora le ve sentido a los lunes. Los compañeros fantásticos y sus perros también.",
    autor: "Verónica Jiménez",
    rol: "Reseña de Google Maps",
  },
  {
    texto: "Voy todos las semanas. No lo hago para competir, pero mi perro adora y disfrutamos los dos.",
    autor: "Jonathan C.",
    rol: "Reseña de Google Maps",
  },
];

export default function Testimonials() {
  return (
    <section id="resenas" className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            4.9 ★ en Google · 14 reseñas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {resenas.map((r) => (
            <div key={r.autor} className="bg-[#f9fffe] border border-[#e8f5ee] rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-[#555] text-[15px] leading-[1.75] flex-1 italic">"{r.texto}"</p>
              <div>
                <p className="font-bold text-[#1a1a1a] text-sm">— {r.autor}</p>
                <p className="text-[#aaa] text-xs mt-0.5">{r.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
