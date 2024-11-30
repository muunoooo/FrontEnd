"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div 
    id="home"
    className="hero bg-[#FFFC9B] min-h-screen w-auto 
    text-center text-black">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-5">
        {/* <div>
          <TypeAnimation
            className=" font-bold"
            sequence={[
              "Hello !",
              2000,
              "Hi !",
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
        </div> */}
        <p className="font-bold">Welcome to my Portofolio</p>
        <Image
          src={"/Me/Muno1.png"}
          className="max-w-sm rounded-lg"
          alt="MyPhoto"
          width={200}
          height={100}
        />
        <div>
          <p className="font-bold">my name is</p>
          <strong className="text-5xl font-bold">Muhammad Naufal!</strong>
        </div>
      </div>
    </div>
  );
}
