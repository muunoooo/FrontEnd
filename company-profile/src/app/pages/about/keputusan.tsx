import { oswald } from "@/app/fonts";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      className="hero bg-base-100 min-h-screen"
      style={{
        backgroundImage: "url('/svg/waveAboutUs1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        <div>
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <div className="text-center lg:text-start">
              <div className={oswald.className}>
                <strong className="text-5xl text-white font-extrabold">
                  ABOUT <br />
                  PT.{" "}
                  <strong className="text-5xl text-[#2596be] font-extrabold md:text-[#45daf8]">
                    GEOVASI
                  </strong>
                </strong>
              </div>
              <p className="text-2xl font-bold md:text-4xl text-white">
                Persada International
              </p>
              <p className="py-6 text-lg md:text-3xl">
                Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia
                NOMOR AHU-0038094.AH.01.01 TAHUN 2022 Tentang Pengesahan
                Pendirian Badan Hukum Perseroan Terbatas PT Geovasi Persada
                International
              </p>
              <p>
                With <span className="italic">NOMOR AHU-0038094.AH.01.01</span>{" "}
                <br />
                <span className="text-[#2596be] font-bold">Geovasi</span> was
                officially operated since{" "}
                <span className="font-bold text-white">June 2022</span>
              </p>
            </div>

            <div className="relative w-full max-w-md">
              <Image
                src="/Home/Logo Kecil.png"
                alt="Geovasi Logo"
                width={500}
                height={500}
                priority
                sizes="(max-width: 768px) 80vw, 500px"
                className="w-full md:w-[500px] h-auto max-w-sm rounded-lg "
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
