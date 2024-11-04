"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      className="w-full h-[89vh] bg-cover bg-center flex flex-col items-center justify-center text-center p-4"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex flex-col items-center text-black font-bold">
        <h1 className="text-3xl md:text-4xl mb-4">I'm Muno</h1>
        <TypeAnimation
          className="flex-1"
          sequence={[
            "I'm a programmer",
            1000,
            "I'm a student",
            2000,
            "I'm a man",
            1500,
            "I'm a superman?",
            1000,
            "I'm a maybe",
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1rem", display: "inline-block" }}
        />

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Image
            src="/valorant.svg"
            alt="Valorant Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <Image
            src="/dota.svg"
            alt="Dota Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <Image
            src="/spongebob.svg"
            alt="Spongebob Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <Image
            src="/bokugo.svg"
            alt="Bokugo Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <Image
            src="/mando.svg"
            alt="Mando Logo"
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>
      </div>
    </div>
  );
}
