import type { Metadata } from "next";
import { Playfair_Display, Poppins, Stardos_Stencil } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

const stardos = Stardos_Stencil({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-stardos',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sunrise Public School",
  description: "Welcome to Sunrise Public School - Nurturing minds, building futures",
  themeColor: '#2D3436'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} ${stardos.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} text-[#F5F5F5] antialiased selection:bg-[#D35400] selection:text-white`}>
        <div className="relative min-h-screen">
          {/* Animated background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#2D3436] via-[#34495E] to-[#2C3E50] animate-pulse-slow"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
            <Footer />
          </div>

          {/* Decorative elements */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#D35400] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#C0392B] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-2s' }}></div>
          </div>
        </div>
      </body>
    </html>
  );
}
