import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-black"
      style={{
        backgroundImage: "url('/svg/waveAboutUs1.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Wrapper>
        <p>
          Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia NOMOR
          AHU-0038094.AH.01.01 TAHUN 2022 Tentang Pengesahan Pendirian Badan
          Hukum Perseroan Terbatas PT Geovasi Persada International
        </p>
        <p>Founder’s Statement Noviarso Wicaksono</p>
        <p>
          Geovasi comprises a team of highly motivated individuals who drive
          innovation in geoscience and related technologies. We prioritize good
          governance, valuing human safety and organizational integrity.
        </p>
      </Wrapper>
    </div>
  );
}
