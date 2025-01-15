import { Oswald } from "next/font/google";

const oswald = Oswald({ weight: "400", subsets: ["latin"], display: "swap" });

import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="hero bg-base-100 min-h-screen"
      style={{
        backgroundImage: "url('/svg/bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        <div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              <Image
                src="/Home/hero.jpg"
                alt="Geovasi"
                priority
                layout="responsive"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg shadow-2xl w-full h-auto"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="text-center lg:text-start mt-8 lg:mt-0">
              <div className={oswald.className}>
                <p className="text-5xl text-white font-extrabold">
                  PT.{" "}
                  <strong className="text-5xl text-[#2596be] font-extrabold md:text-[#45daf8]">
                    GEOVASI
                  </strong>
                </p>
              </div>

              <h1 className="text-2xl font-bold md:text-4xl text-white">
                Persada International
              </h1>
              <p className="py-6 text-lg md:text-3xl">
                <span className="text-[#45daf8]">Geovasi</span> is here to be
                your <span className="text-[#c9fcfe]">trusted</span> partner in
                carrying out all your{" "}
                <span className=" text-[#c9fcfe]">mining plans</span> and
                developing your mining into{" "}
                <span className=" text-[#c9fcfe]">smart mining</span>
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
