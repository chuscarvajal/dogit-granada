const servicios = [
  { num: "01", title: "Obediencia básica", desc: "Sentado, quieto, tumbado, aquí... Trabajamos juntos para construir una comunicación sólida desde cero. Grupos reducidos para máxima atención.", badge: null, wa: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20obediencia%20b%C3%A1sica%20en%20DogIt." },
  { num: "02", title: "Agility y deportes", desc: "Circuitos de agilidad y deporte canino para perros que ya dominan los fundamentos. Ejercitamos cuerpo y mente en un ambiente divertido.", badge: "MÁS PEDIDO", wa: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20agility%20en%20DogIt." },
  { num: "03", title: "Educación de cachorros", desc: "El momento ideal para empezar. Socializamos, creamos hábitos sanos y establecemos las bases para una vida feliz desde los primeros meses.", badge: null, wa: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20educaci%C3%B3n%20de%20cachorros%20en%20DogIt." },
  { num: "04", title: "Seguimiento y apoyo", desc: "Resolvemos dudas entre sesiones y ajustamos el plan. Continuidad para que tú y tu perro no perdáis el ritmo entre clases.", badge: null, wa: "Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20en%20DogIt." },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#2D1A0E]">
      <div className="wrap py-20">
        <div className="mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4" style={{ background: "rgba(212,82,42,0.2)", color: "#E8835A" }}>
            Formación
          </span>
          <h2 className="text-white leading-tight" style={{ fontSize: "clamp(26px, 4vw, 46px)", fontFamily: "'Playfair Display', serif" }}>
            Qué podemos hacer <br className="hidden lg:block" />
            <em className="text-[#D4522A] not-italic">por tu perro</em>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Cada perro es único. Diseñamos el programa según su carácter y tus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 border border-white/10 rounded-2xl overflow-hidden">
          {servicios.map((s, i) => (
            <div key={s.num} className={`p-8 lg:p-10 flex flex-col gap-5 hover:bg-white/5 transition-colors duration-200 ${i < 2 ? "border-b border-white/10" : ""} ${i % 2 === 0 ? "md:border-r border-white/10" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-black text-white/15 leading-none select-none" style={{ fontSize: 56 }}>{s.num}</span>
                {s.badge && (
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#D4522A] text-white px-3 py-1.5 rounded-full shrink-0 mt-1">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
              <p className="text-white/55 text-[15px] leading-[1.8] flex-1">{s.desc}</p>
              <a href={`https://wa.me/34695924946?text=${s.wa}`} target="_blank" rel="noopener noreferrer"
                className="text-[#D4522A] text-sm font-bold hover:text-white transition-colors duration-200">
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
