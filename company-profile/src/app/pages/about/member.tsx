import Wrapper from "@/components/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MemberPage() {
  return (
    <div
      className="h-[500px] bg-black"
      style={{
        backgroundImage: "url('/svg/waveAboutUs2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        <div className="flex flex-col justify-center text-center pt-10 gap-5 mx-5">
          <div className="text-xl text-white italic">
            <span className="text-[#45daf8]">We</span> focus on supporting your
            company with{" "}
            <span className="text-[#45daf8]">
              Geo-IT innovation, research, and sustainable technology
              development.
            </span>
          </div>
          <div className="mt-10">
            <p className="text-3xl">
              {" "}
              <span className="text-[#45daf8]">Our</span> Associations
              Membership
            </p>
            <div className="flex justify-center mt-10 gap-5">
              <Link
                href="https://www.hagi.or.id/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="hagi"
              >
                <Image
                  src="/About/Hagi2.png"
                  alt="Hagi Logo"
                  width={180}
                  height={180}
                  priority
                  className="w-[130px]"
                />
              </Link>
              <Link
                href="https://www.iagi.or.id/new/system/index.php"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="iagi"
              >
                <Image
                  src="/About/IAGI.png"
                  alt="IAGI Logo"
                  width={180}
                  height={180}
                  priority
                  className="w-[130px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
