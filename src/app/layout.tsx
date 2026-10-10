import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vito Pizza",
  description: "Pizzas con mucho cariño. Pedidos por WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col overflow-x-hidden relative selection:bg-brand-dark selection:text-brand-cream">
        {/* Very subtle grain overlay for that retro feel */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        {children}
      </body>
    </html>
  );
}
