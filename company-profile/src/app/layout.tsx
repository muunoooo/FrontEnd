import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Source_Sans_3 } from "next/font/google";
import Footer from "@/components/footer";



const sans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. Geovasi Persada International",
  description: "Company Profile of PT Onum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
