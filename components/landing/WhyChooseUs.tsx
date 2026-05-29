export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <img src="/images/programa-cachorro.webp" alt="Cachorro en sesión" className="w-full h-[180px] object-cover rounded-xl" />
              <img src="/images/programa-agility.webp" alt="Agility en DogIt Granada" className="w-full h-[180px] object-cover rounded-xl" />
            </div>
            <img src="/images/programa-grande.webp" alt="Adiestramiento en Granada" className="w-full h-[375px] object-cover rounded-xl" />
          </div>

          <div>
            <span className="section-tag">Por qué elegirnos</span>
            <h2 className="leading-tight mb-5" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
              Programas de <em className="text-[#D4522A] not-italic">adiestramiento</em>
            </h2>
            <p className="text-[#6B4C3A] leading-[1.85] mb-6">
              Desde la obediencia básica hasta el agility avanzado y el trabajo de comportamiento. Nuestros programas están diseñados para cada etapa de vida de tu perro, con métodos positivos y resultados reales.
            </p>
            <ul className="space-y-3">
              {["Metodología 100% positiva sin castigos", "Grupos reducidos y atención personalizada", "Seguimiento entre sesiones incluido", "Adiestradores con experiencia contrastada"].map(t => (
                <li key={t} className="flex items-center gap-3 text-[#6B4C3A] text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#D4522A] flex items-center justify-center text-white text-xs shrink-0">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
