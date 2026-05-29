const items = [
  { emoji: "🐾", text: "Adiestramiento positivo" },
  { emoji: "💛", text: "Sin castigos ni coerción" },
  { emoji: "📍", text: "Granada" },
  { emoji: "⭐", text: "4.9 · 14 reseñas Google" },
];

export default function TrustBar() {
  return (
    <div className="bg-[#1b3d2a] py-3.5 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-white/80 text-sm font-medium whitespace-nowrap">
            <span>{item.emoji}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
