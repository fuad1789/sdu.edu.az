import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import both fonts
import Footer from "@/components/shared/footer";
import "./globals.css";

// Configure fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumqayıt Dövlət Universiteti",
  description: "Rəsmi Web Sayt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={`${inter.variable} ${playfair.variable} bg-paper text-sdu-blue antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
