export default function Contact() {
  return (
    <section id="contacto">
      <div className="relative h-[320px] lg:h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=600&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-4">
          <h2 className="font-black text-white text-3xl lg:text-[48px] mb-3">
            Contáctanos
          </h2>
          <p className="text-white/80 text-[17px]">Nos encantaría verte por aquí en Granada</p>
        </div>
      </div>

      <div className="bg-white py-14">
        <div className="wrap">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: "📍", label: "Dirección", text: "Ctra. de servicio Chauchina-Jau, 18329 Granada" },
              { icon: "📞", label: "Teléfono / WhatsApp", text: "695 92 49 46" },
              { icon: "⭐", label: "Valoración", text: "4.9 ★ · 14 reseñas en Google" },
              { icon: "🐾", label: "Especialidad", text: "Obediencia, Agility y Cachorros" },
            ].map(({ icon, label, text }) => (
              <li key={label} className="flex flex-col items-center gap-3">
                <span className="w-12 h-12 bg-[#3CB371]/12 rounded-full flex items-center justify-center text-2xl">
                  {icon}
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371]">{label}</p>
                <p className="text-[#555] text-[14px] leading-snug">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/34695924946?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20DogIt."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] text-white font-black text-base px-12 py-5 rounded-2xl hover:bg-[#1da851] active:scale-95 transition-all duration-200 shadow-xl">
              <svg viewBox="0 0 448 512" className="w-6 h-6 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>
              Escríbenos por WhatsApp — 695 92 49 46
            </a>
          </div>

          <div className="mt-10 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md" style={{ height: 380 }}>
            <iframe
              src="https://maps.google.com/maps?cid=1931038354707969435&output=embed"
              width="100%" height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de DogIt — Granada"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
