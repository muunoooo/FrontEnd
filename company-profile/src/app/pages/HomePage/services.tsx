import Wrapper from "@/components/wrapper";
import Link from "next/link";

export default function Services() {
  return (
    <div
      className=" w-auto h-auto md:h-[400px] 
    bg-[#071e26] flex flex-col justify-center"
    >
      <Wrapper>
        <div className="text-center md:mt-10">
          <div>
            <Link
              href={"/our-services"}
              className="text-2xl md:text-4xl hover:bg-black hover:text-white transition-all duration-200 ease-in-out px-2 rounded-md"
            >
              What does{" "}
              <span className="text-4xl md:text-5xl text-[#2596be] font-extrabold hover:text-white">
                Geovasi
              </span>{" "}
              do?
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-4 text-[#071e26]">
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105">
              <h2 className="card-title text-center md:h-[90px]">ERT Survey</h2>
            </div>
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105">
              <h2 className="card-title text-center md:h-[90px]">GPR Survey</h2>
            </div>
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105">
              <h2 className="card-title text-start md:text-center md:h-[90px]">
                Aerial Mapping (sUAV/Drone)
              </h2>
            </div>
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105 md:w-auto">
              <h2 className="card-title text-start md:text-center md:h-[90px]">
                Web & Mobile Applications (Dashboard)
              </h2>
            </div>
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105">
              <h2 className="card-title text-center md:h-[90px]">
                Tracking Process
              </h2>
            </div>
            <div className="card-body card bg-[#45daf8] w-72 hover:scale-105">
              <h2 className="card-title text-center md:h-[90px]">Telemetry</h2>
            </div>
            <div>
              <Link href={"/our-services"}>
                <button className="btn bg-black text-[#45daf8]">
                  More Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
