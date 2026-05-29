"use client";
import { useState } from "react";

const paquetes = [
  { key: "basico",    label: "Básico",      sub: "Obediencia",  precio: 55 },
  { key: "avanzado",  label: "Avanzado",    sub: "Agility",     precio: 70 },
  { key: "cachorro",  label: "Cachorro",    sub: "Socialización", precio: 50 },
];

export default function Calculator() {
  const [pkg, setPkg]         = useState("basico");
  const [sesiones, setSesiones] = useState(3);
  const [evalExtra, setEval]  = useState(false);

  const paquete = paquetes.find(p => p.key === pkg)!;
  const subtotal = paquete.precio * sesiones;
  const extras   = evalExtra ? 30 : 0;
  const total    = subtotal + extras;

  return (
    <section id="calculadora" className="py-20 bg-[#f0faf5]">
      <div className="wrap">
        <div className="text-center mb-14">
          <span className="text-[#3CB371] text-xs font-bold uppercase tracking-[0.22em] mb-2 block">
            Presupuesto orientativo
          </span>
          <h2 className="font-black text-[#1a1a1a] text-3xl lg:text-[38px]">
            Calculadora de Sesiones
          </h2>
          <p className="text-[#666] text-[15px] mt-3 max-w-md mx-auto">
            Configura tu plan y obtén un coste estimado sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Controles */}
          <div className="bg-white rounded-2xl border border-[#e8f5ee] p-8 space-y-7 shadow-sm">

            {/* Tipo de programa */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">1. Programa</p>
              <div className="grid grid-cols-3 gap-3">
                {paquetes.map(p => (
                  <button key={p.key} onClick={() => setPkg(p.key)}
                    className={`rounded-xl p-3 text-center border-2 transition-all ${pkg === p.key ? "border-[#3CB371] bg-[#f0faf5]" : "border-[#e8f5ee] hover:border-[#3CB371]/40"}`}>
                    <p className="font-bold text-[#1a1a1a] text-sm">{p.label}</p>
                    <p className="text-[#888] text-[11px] mt-0.5">{p.sub}</p>
                    <p className="text-[#3CB371] font-black text-sm mt-1">{p.precio}€/ses.</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Nº sesiones */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">
                2. Número de sesiones —{" "}
                <span className="text-[#1a1a1a] normal-case tracking-normal font-black">{sesiones}</span>
              </p>
              <input type="range" min={1} max={10} value={sesiones}
                onChange={e => setSesiones(Number(e.target.value))}
                className="w-full accent-[#3CB371]" />
              <div className="flex justify-between text-[11px] text-[#aaa] mt-1">
                <span>1 sesión</span><span>10 sesiones</span>
              </div>
            </div>

            {/* Extras */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3CB371] mb-3">3. Extras</p>
              <button onClick={() => setEval(v => !v)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${evalExtra ? "border-[#3CB371] bg-[#f0faf5]" : "border-[#e8f5ee] hover:border-[#3CB371]/40"}`}>
                <div className="text-left">
                  <p className="font-bold text-[#1a1a1a] text-sm">Valoración inicial</p>
                  <p className="text-[#888] text-[12px]">Diagnóstico completo antes de empezar</p>
                </div>
                <span className="font-black text-[#3CB371]">+30€</span>
              </button>
            </div>
          </div>

          {/* Resumen */}
          <div className="bg-[#1b3d2a] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-black text-lg mb-6">Resumen del Plan</h3>
              <ul className="space-y-3 text-sm">
                {[
                  ["Programa",       paquete.label],
                  ["Precio/sesión",  `${paquete.precio}€`],
                  ["Sesiones",       `${sesiones}`],
                  ["Subtotal",       `${subtotal}€`],
                  ["Extras",         evalExtra ? "+30€ (valoración)" : "—"],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">{k}</span>
                    <span className="font-bold">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/20">
                <span className="font-black text-lg">Total estimado</span>
                <span className="font-black text-3xl text-[#3CB371]">{total}€</span>
              </div>
            </div>
            <a
              href={`https://wa.me/34695924946?text=${encodeURIComponent(`Hola, quiero consultar disponibilidad para el programa ${paquete.label} (${sesiones} sesión${sesiones !== 1 ? "es" : ""})${evalExtra ? ", con valoración inicial" : ""}. Total estimado: ${total}€.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-[#25d366] text-white font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#1da851] active:scale-95 transition-all duration-200 shadow-lg">
              <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white shrink-0"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>
              Enviar consulta por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
