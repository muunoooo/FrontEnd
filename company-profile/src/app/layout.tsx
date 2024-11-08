import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Oswald, Source_Sans_3, Poppins } from "next/font/google";
import Footer from "@/components/footer";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={sans.className}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
