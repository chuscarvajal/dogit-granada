import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adiestrador Canino en Granada | DogIt",
  description: "Adiestramiento canino en Granada. Club canino con clases de obediencia, agility y cachorros. 4.9 ★ en Google.",
  openGraph: {
    title: "Adiestrador Canino en Granada | DogIt",
    description: "Adiestramiento canino en Granada. Club canino con clases de obediencia y agility. 4.9 ★ en Google.",
    url: "https://dogit-granada.vercel.app",
    type: "website",
    images: [{ url: "https://dogit-granada.vercel.app/images/programa-cachorro.webp", width: 1200, height: 800 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
