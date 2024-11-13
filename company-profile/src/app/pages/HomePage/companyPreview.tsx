import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";

export default function ComPreview() {
  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/svg/bg2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        {/* Top text */}
        <div className="text-center mb-10 p-10 items-center flex flex-col">
          <p className=" text-3xl md:text-4xl mb-10 md:mb-6">
            What Is{" "}
            <span className="text-[#2596be] font-bold italic text-4xl md:text-5xl">
              GEOVASI?
            </span>
          </p>
          <Image
            src="/navbar/Logo Kecil.png"
            alt="Geovasi Logo"
            width={200}
            height={200}
            className="items-center w-44 h-auto"
          />

          <p className="px-5 md:px-20 text-pretty text-lg md:text-xl">
            <span className="text-[#2596be] font-extrabold">Geovasi </span>is a
            <span className="text-[#c9fcfe]"> consultant mining</span> and
            <span className="text-[#c9fcfe]"> geoscience</span>, especially in{" "}
            <span className="text-[#c9fcfe]">
              hydrology, geology, geophysics, and smart mining.
            </span>{" "}
            We stand with a background of research and innovation for mining
            that will assist you in
            <span className="text-[#c9fcfe]">
              {" "}
              developing your mining plan smartly
            </span>
          </p>
          <Link href="/about-us" aria-label="Learn more about Geovasi">
            <button className="btn bg-[#45daf8] text-black mt-10">
              About us
            </button>
          </Link>
        </div>

        {/* Image row with centered middle image */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Image
            src="/Home/2.jpeg"
            alt="Geovasi service illustration 1"
            height={60}
            width={300}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <Image
            src="/Home/3.jpeg"
            alt="Geovasi service illustration 2"
            height={60}
            width={300}
            className="max-w-sm rounded-lg shadow-2xl mx-5"
          />
          <Image
            src="/Home/5.jpeg"
            alt="Geovasi service illustration 3"
            height={60}
            width={300}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
      </Wrapper>
    </div>
  );
}
