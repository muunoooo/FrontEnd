"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollActive = scroll
    ? "py-[10px] h-[40px] bg-white text-black shadow"
    : "py-4 bg-[#006A67] text-white";
  return (
    <div
      className={`navbar w-screen h-[60px] 
        fixed z-50 justify-between px-4 sm:px-20 box-border transition-all duration-300 ${scrollActive}`}
    >
      <div className="flex flex-1 justify-center gap-10 mr-12">

        <Link href="/" className=" hover:underline hover:scale-105">Landing</Link>
        <Link href="/about" className=" hover:underline hover:scale-105">About</Link>
        <Link href="/education" className=" hover:underline hover:scale-105">Education</Link>
      </div>
    </div>
  );
}
