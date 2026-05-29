export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=900&fit=crop&crop=right"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2a]/95 via-[#1b3d2a]/75 to-[#1b3d2a]/10" />
      </div>

      <div className="relative wrap py-28 lg:py-0 lg:min-h-[88vh] flex items-center justify-start">
        <div className="max-w-lg lg:max-w-xl text-left">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-white text-xs font-bold">4.9 · 14 reseñas en Google</span>
          </div>
          <h1
            className="font-black text-white leading-[1.05] mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 62px)" }}
          >
            Adiestrador canino en <span className="text-[#3CB371]">Granada</span>
          </h1>
          <p className="text-white/70 text-[16px] leading-[1.85] mb-10 max-w-md">
            Club canino en Granada con clases de obediencia, agility y trabajo con cachorros. Programas adaptados para perros de todas las razas y edades.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/34695924946?text=Hola%2C%20quiero%20reservar%20una%20cita%20en%20DogIt."
              className="inline-flex items-center gap-2 bg-[#25d366] text-white font-bold text-sm px-9 py-4 rounded-xl hover:bg-[#1da851] active:scale-95 transition-all duration-200 shadow-lg"
              target="_blank" rel="noopener noreferrer"
            >
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>
              Reservar cita →
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-bold text-sm px-7 py-4 rounded-xl hover:bg-white/20 active:scale-95 transition-all duration-200"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
