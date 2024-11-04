"use client";

import { TypeAnimation } from "react-type-animation";

export default function Contact() {
  return (
    // master
    <div
      className="w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="font-bold">
        <TypeAnimation
          className="flex-1 font-bold"
          sequence={[
            "Let's connect",
            1500, // Waits 1s
            "mari terhubung",
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
          style={{
            fontSize: "1rem",
            display: "inline-block",
            color: "black",
            font: "bold",
          }}
        />
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
        className=" bottom-0">
          <path
            fill="#2a323c"
            fill-opacity="1"
            d="M0,256L30,234.7C60,213,120,171,180,181.3C240,192,300,256,360,245.3C420,235,480,149,540,149.3C600,149,660,235,720,229.3C780,224,840,128,900,122.7C960,117,1020,203,1080,213.3C1140,224,1200,160,1260,154.7C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
    </div>
  );
}
