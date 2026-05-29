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
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            {[
              { icon: "📍", label: "Dirección", text: "Ctra. de servicio Chauchina-Jau, 18329 Granada" },
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

          <div className="mt-12 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md" style={{ height: 380 }}>
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
