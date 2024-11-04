"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar () {
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
  
    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";
    return (
        <div className={`flex items-center h-[60px] bg-white text-black font-bold transition-all`}>
            <img src="https://img.icons8.com/?size=100&id=wq1yF4oV5J7q&format=png&color=000000" alt="" 
            className="w-auto h-[60px]"/>
            <div className="flex flex-1 justify-center gap-10 underline mr-12">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/education">Education</Link>
            </div>
        </div>
    )
}
