export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Izquierda: texto */}
          <div className="lg:pt-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#3CB371] bg-[#e8f5ee] px-4 py-1.5 rounded-full mb-5">
              El club
            </span>
            <h2 className="font-black text-[#1a1a1a] leading-tight mb-6" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
              Hola, somos <span className="text-[#3CB371] italic">DogIt</span>
            </h2>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-5">
              Somos un club canino en Granada especializado en obediencia, agility y trabajo con cachorros. Nuestra metodología parte de entender cómo aprende y se motiva cada perro — desde ahí construimos una relación sólida, no solo comandos.
            </p>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-8">
              Priorizamos la conexión porque creemos que un perro que confía aprende mejor y más rápido. Trabajamos sin castigos ni herramientas coercitivas, y los resultados hablan solos.
            </p>

            <div className="flex flex-wrap gap-3">
              {["🐾 Adiestramiento positivo", "⭐ 4.9 estrellas", "💛 Sin coerción"].map(t => (
                <span key={t} className="text-sm font-semibold text-[#444] border border-[#ddd] rounded-full px-4 py-1.5 bg-white">
                  {t}
                </span>
              ))}
            </div>

            <a href="https://wa.me/34695924946?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20DogIt."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#25d366] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#1da851] active:scale-95 transition-all duration-200 shadow-lg">
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Derecha: imagen + reseña */}
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=560&fit=crop&crop=center"
                alt="Club canino DogIt — adiestramiento en Granada"
                className="w-full h-[420px] lg:h-[480px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#1b3d2a] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Granada · ES
              </div>
            </div>

            {/* Reseña bajo la imagen */}
            <blockquote className="mt-6 border-l-4 border-[#3CB371] pl-5">
              <p className="text-[#555] text-[15px] leading-[1.75] italic">
                "El entrenador tiene una paciencia infinita, mi hija y nuestra perrita disfruta cada momento. Ahora le ve sentido a los lunes."
              </p>
              <footer className="mt-3 text-xs text-[#999] font-semibold uppercase tracking-wider">
                — Verónica J., reseña Google
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
