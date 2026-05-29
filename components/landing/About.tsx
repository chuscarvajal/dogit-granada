export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&h=560&fit=crop&crop=center"
              alt="Club canino DogIt — adiestramiento en Granada"
              className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl shadow-xl"
            />
            {/* Badge rating */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
              <span className="text-2xl">🐾</span>
              <div>
                <p className="font-black text-[#1a1a1a] text-sm leading-tight">4.9 ★ en Google</p>
                <p className="text-[#888] text-xs">14 reseñas verificadas</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-3 block">
              Quiénes somos
            </span>
            <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px] leading-tight mb-6">
              Un club canino donde los perros aprenden <span className="text-[#3CB371]">disfrutando</span>
            </h2>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-5">
              DogIt es un club canino en Granada especializado en obediencia, agility y trabajo con cachorros. Trabajamos con perros de todas las razas y edades con una metodología basada en el refuerzo positivo: sin castigos, sin estrés.
            </p>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-8">
              Nuestro objetivo no es competir — es que cada perro y su familia tengan la mejor relación posible. Los resultados hablan por sí solos: 4.9 ★ de media en Google con clientes que repiten semana tras semana.
            </p>

            <ul className="space-y-4">
              {[
                { icon: "✅", text: "Metodología 100% positiva — sin correcciones ni castigos" },
                { icon: "✅", text: "Clases de obediencia, agility y educación de cachorros" },
                { icon: "✅", text: "Grupos reducidos para una atención personalizada" },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-[15px] text-[#444]">
                  <span className="text-[#3CB371] font-bold shrink-0">{icon}</span>
                  {text}
                </li>
              ))}
            </ul>

            <a href="#contacto"
              className="inline-flex items-center gap-2 mt-8 bg-[#3CB371] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#2E8B57] active:scale-95 transition-all duration-200 shadow-lg">
              Reservar una clase →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
