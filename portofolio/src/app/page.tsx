"use client";

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    // master
    <div
      className="w-full h-[90vh] bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      {/* left */}
      <div>
        <div className="flex-1 text-center text-black font-bold">
          <h1 className="font-bold text-4xl">I'm Muno</h1>
          <TypeAnimation
            className="flex-1"
            sequence={[
              "I'm a programmer",
              1000, // Waits 1s
              "I'm a tenacious person",
              2000, // Waits 2s
              "Dum spiro, spero",
              1500,
              "Mens sana in corpore sano",
              1000,
              "Acta non verba",
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
        </div>
      </div>
      {/* right */}
      <div>
        <p></p>
      </div>
    </div>
  );
}
