"use client";

import Wrapper from "@/components/wrapper";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <Wrapper>
        <div className="hero-content flex flex-col lg:flex-row-reverse gap-5">
          <Image
            src={"/Me/Muno1.png"}
            className="max-w-sm rounded-lg hidden md:block"
            alt="MyPhoto"
            width={200}
            height={100}
          />

          <div>
            <p className="font-bold">my name is</p>
            <strong className="text-5xl font-bold">Muhammad Naufal!</strong>
            <div>
                <TypeAnimation
                  className=" font-bold"
                  sequence={[
                    "I'm A Developer",
                    2000,
                    "I'm A Programmer",
                    2000,
                    "I'm A Coder",
                    2000,
                    "I'm A Full-Stack Developer",
                    2000,
                    "I'm A Tech Developer.",
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
        </div>
      </Wrapper>
    </div>
  );
}
