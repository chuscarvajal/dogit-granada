import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adiestrador Canino en Granada | DogIt",
  description: "Club canino en Granada — obediencia, agility y cachorros. 4.9 ★ en Google. Metodología positiva sin castigos.",
  openGraph: {
    title: "Adiestrador Canino en Granada | DogIt",
    description: "Club canino en Granada — obediencia, agility y cachorros. 4.9 ★ en Google.",
    url: "https://dogit-granada.vercel.app",
    type: "website",
    images: [{ url: "https://dogit-granada.vercel.app/images/programa-cachorro.webp", width: 1200, height: 800 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
