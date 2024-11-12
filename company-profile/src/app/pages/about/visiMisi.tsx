import Wrapper from "@/components/wrapper";
import React from "react";

export default function VissionMissionPage() {
  return (
    <div className="bg-[#0d3645]  ">
      <Wrapper>
        <div className="flex flex-col  justify-center text-center gap-3 pt-7">
          <div className="flex flex-col gap-7">
            <p className="text-3xl md:text-4xl">
              Our <span className="text-[#45daf8]">Vision</span>
            </p>

            <p className="text-white text-2xl mx-4">
              To lead in geoscience innovation, research, and sustainable
              technology development.
            </p>
          </div>
          <div className="flex flex-col gap-7 mt-10">
            <div className="text-3xl md:text-4xl">
              <p>
                Our <span className="text-[#45daf8]">Mission</span>
              </p>
            </div>
            <div className="text-lg text-[#45daf8] flex flex-col md:flex-row gap-5 justify-center items-center">
              <div className="card-body card bg-black w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px]">
                  Providing precise solutions in geoscience and information
                  technology.
                </h2>
              </div>
              <div className="card-body card bg-black w-72  hover:scale-105">
                <h2 className="card-title text-center md:h-[120px]">
                  Advancing technology development to support geoscience and
                  information technology.
                </h2>
              </div>
              <div className="card-body card bg-black w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px]">
                  Ensuring the highest quality of accountable service.
                </h2>
              </div>
              <div className="card-body card bg-black w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px]">
                  Building a skilled and expert workforce in geoscience and
                  information technology.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
