const servicios = ["Obediencia básica", "Agility", "Educación de cachorros", "Seguimiento y apoyo"];
const links = ["Inicio", "Servicios", "Nosotros", "Reseñas", "Contacto", "FAQ"];

export default function Footer() {
  return (
    <footer style={{ background: "#2D1A0E" }} className="text-white">
      <div className="wrap py-14 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="text-xl">🐾</span>
            <span className="font-bold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>DogIt</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-1">Club Canino · Granada</p>
          <p className="text-white/40 text-sm leading-relaxed">Obediencia, agility y cachorros — metodología positiva.</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Servicios</h4>
          <ul className="space-y-2">
            {servicios.map(s => <li key={s}><a href="#servicios" className="text-white/40 text-xs hover:text-white transition-colors">{s}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Navegación</h4>
          <ul className="space-y-2">
            {links.map(l => <li key={l}><a href="#" className="text-white/40 text-xs hover:text-white transition-colors">{l}</a></li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-5 text-white/80">Contacto</h4>
          <ul className="space-y-3 text-white/40 text-xs">
            <li><a href="https://wa.me/34695924946" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">📞 695 92 49 46</a></li>
            <li>📍 Ctra. de servicio Chauchina-Jau<br />18329 Granada</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/25">
          <p>© {new Date().getFullYear()} DogIt · Club Canino · Granada</p>
          <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
