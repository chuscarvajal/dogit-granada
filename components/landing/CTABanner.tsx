export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&h=700&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2E8B57]/85" />
      </div>

      <div className="relative wrap text-center">
        <h2 className="font-black text-white text-3xl lg:text-[48px] leading-tight mb-5 max-w-3xl mx-auto">
          Nos esforzamos por cuidar a tu perro como ningún otro.
        </h2>
        <p className="text-white/80 text-[16px] leading-[1.8] mb-10 max-w-xl mx-auto">
          Adiestramiento profesional, cariño y dedicación para que tu perro sea feliz, obediente y esté bien educado.
        </p>
        <a href="https://wa.me/34695924946?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20DogIt."
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-[#2E8B57] font-black text-sm px-10 py-4 rounded-xl hover:bg-gray-50 active:scale-95 transition-all duration-200 shadow-xl">
          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-[#25d366] shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>
          Solicitar información
        </a>
      </div>
    </section>
  );
}
