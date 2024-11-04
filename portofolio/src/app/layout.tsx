import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import {Poppins} from "next/font/google"
import Footbar from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "Muno",
  description: "Portofolio Muno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`Poppins.className antialiased`}
      >
        <Navbar/>
        {children}
        <Footbar/>
      </body>
    </html>
  );
}
