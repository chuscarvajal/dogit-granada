const servicios = [
  {
    num: "01",
    title: "Obediencia básica",
    desc: "Sentado, quieto, tumbado, aquí... Trabajamos juntos para construir una comunicación sólida desde cero. Grupos reducidos con atención personalizada.",
    badge: null,
    link: "https://wa.me/34695924946?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20obediencia%20b%C3%A1sica%20en%20DogIt.",
  },
  {
    num: "02",
    title: "Agility y deportes",
    desc: "Circuitos de agilidad y deporte canino para perros que ya dominan los fundamentos. Ejercitamos cuerpo y mente en un ambiente divertido.",
    badge: "MÁS PEDIDO",
    link: "https://wa.me/34695924946?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20agility%20en%20DogIt.",
  },
  {
    num: "03",
    title: "Educación de cachorros",
    desc: "El momento ideal para empezar. Socializamos, creamos hábitos sanos y establecemos las bases para una vida feliz desde los primeros meses.",
    badge: null,
    link: "https://wa.me/34695924946?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20educaci%C3%B3n%20de%20cachorros%20en%20DogIt.",
  },
  {
    num: "04",
    title: "Seguimiento y apoyo",
    desc: "Resolvemos dudas entre sesiones y ajustamos el plan según el progreso de cada perro. Continuidad para no perder el hilo.",
    badge: null,
    link: "https://wa.me/34695924946?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20seguimiento%20en%20DogIt.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#1b3d2a]">
      <div className="wrap py-20">
        <div className="mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">
            Formación
          </span>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(26px, 4vw, 44px)" }}>
            Qué podemos hacer <br className="hidden lg:block" />
            <span className="text-[#3CB371] italic">por tu perro</span>
          </h2>
          <p className="text-white/60 text-[15px] mt-4 max-w-lg">
            Cada perro es único. Diseñamos el programa según su carácter y tus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {servicios.map((s) => (
            <div key={s.num} className="bg-[#1b3d2a] p-8 lg:p-10 flex flex-col gap-4 hover:bg-[#243f2d] transition-colors duration-200">
              <div className="flex items-start justify-between gap-4">
                <span className="font-black text-white/20 text-5xl leading-none select-none">{s.num}</span>
                {s.badge && (
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#3CB371] text-white px-3 py-1.5 rounded-full shrink-0">
                    {s.badge}
                  </span>
                )}
              </div>
              <h3 className="font-black text-white text-xl">{s.title}</h3>
              <p className="text-white/60 text-[14px] leading-[1.8] flex-1">{s.desc}</p>
              <a href={s.link} target="_blank" rel="noopener noreferrer"
                className="text-[#3CB371] text-sm font-bold hover:text-white transition-colors duration-200 mt-2">
                Consultar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
