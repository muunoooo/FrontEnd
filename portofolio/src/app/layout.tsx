import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footer";

export const metadata: Metadata = {
  title: "Portofolio Muno",
  description: "Portofolio Muno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`Poppins.className antialiased`}>
        <Navbar />
        {children}
        <Footbar />
      </body>
    </html>
  );
}
