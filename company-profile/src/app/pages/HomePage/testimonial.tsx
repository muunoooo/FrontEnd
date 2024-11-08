import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Testimonial() {
  return (
    <div className="bg-[#071e26] py-8 w-auto">
      <p
        className="text-4xl md:text-4xl
       hover:text-white text-center my-10"
      >
        Our <span className="md:text-5xl text-[#2596be] font-bold">Client </span>
      </p>
      <Wrapper>
        <Marquee speed={60} gradient={false}>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <Link
              href={"https://www.amman.co.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/amman.png"}
                alt="AMMAN MINERAL"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://vale.com/in/indonesia"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/vale.png"}
                alt="Vale"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://sumbawatimurmining.com/id/home-id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/STM.png"}
                alt="Sumbawa Timur Mining"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://brin.go.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/BRIN.png"}
                alt="BRIN"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://www.amman.co.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/amman.png"}
                alt="AMMAN MINERAL"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://vale.com/in/indonesia"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/vale.png"}
                alt="Vale"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://sumbawatimurmining.com/id/home-id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/STM.png"}
                alt="Sumbawa Timur Mining"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://brin.go.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/BRIN.png"}
                alt="BRIN"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
          </div>
        </Marquee>
      </Wrapper>
    </div>
  );
}
