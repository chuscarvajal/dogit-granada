export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FFF9F4]">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Izquierda: texto */}
          <div className="lg:pt-4">
            <span className="section-tag">El club</span>
            <h2 className="leading-tight mb-6" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
              Hola, somos <em className="text-[#D4522A] not-italic">DogIt</em>
            </h2>
            <p className="text-[#6B4C3A] leading-[1.85] mb-5">
              Somos un club canino en Granada especializado en obediencia, agility y trabajo con cachorros. Nuestro enfoque parte de entender cómo aprende y se motiva cada perro — desde ahí construimos una relación sólida, no solo comandos.
            </p>
            <p className="text-[#6B4C3A] leading-[1.85] mb-8">
              Priorizamos la conexión porque creemos que un perro que confía aprende mejor y más rápido. Trabajamos sin castigos ni herramientas coercitivas, y los resultados hablan solos.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["🐾 Adiestramiento positivo", "⭐ 4.9 estrellas", "💛 Sin coerción"].map(t => (
                <span key={t} className="text-sm font-semibold text-[#8B3A1E] border border-[#F0D9CC] rounded-full px-4 py-1.5 bg-white">
                  {t}
                </span>
              ))}
            </div>

            <a href="https://wa.me/34695924946?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20DogIt."
              target="_blank" rel="noopener noreferrer"
              className="btn-wa">
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z"/></svg>
              Escribir a DogIt
            </a>
          </div>

          {/* Derecha: foto + reseña */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=560&fit=crop"
                alt="DogIt — adiestramiento canino en Granada"
                className="w-full h-[400px] lg:h-[460px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#D4522A] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                Granada · ES
              </div>
            </div>

            <blockquote className="mt-6 border-l-4 border-[#D4522A] pl-5">
              <p className="text-[#6B4C3A] text-[16px] leading-[1.75] italic">
                "El entrenador tiene una paciencia infinita, mi hija y nuestra perrita disfruta cada momento. Ahora le ve sentido a los lunes."
              </p>
              <footer className="mt-3 text-xs text-[#B08060] font-bold uppercase tracking-wider">
                — Verónica J., reseña Google
              </footer>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
