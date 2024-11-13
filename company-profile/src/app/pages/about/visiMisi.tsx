import Wrapper from "@/components/wrapper";
import React from "react";

export default function VissionMissionPage() {
  return (
    <div className="bg-[#0b2a33]">
      <Wrapper>
        <div className="flex flex-col justify-center text-center gap-3 pt-7">
          <div className="flex flex-col gap-7">
            <p className="text-3xl md:text-4xl text-[#45daf8]">
              Our <span className="text-[#80e1ff]">Vision</span>
            </p>

            <p className="text-gray-200 text-2xl mx-4">
              To lead in geoscience innovation, research, and sustainable
              technology development.
            </p>
          </div>
          <div className="flex flex-col gap-7 mt-10">
            <div className="text-3xl md:text-4xl text-[#45daf8]">
              <p>
                Our <span className="text-[#80e1ff]">Mission</span>
              </p>
            </div>
            <div className="text-lg text-[#80e1ff] flex flex-col md:flex-row gap-5 justify-center items-center">
              <div className="card-body card bg-[#1a1a1a] w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px] text-gray-100">
                  Providing precise solutions in geoscience and information
                  technology.
                </h2>
              </div>
              <div className="card-body card bg-[#1a1a1a] w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px] text-gray-100">
                  Advancing technology development to support geoscience and
                  information technology.
                </h2>
              </div>
              <div className="card-body card bg-[#1a1a1a] w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px] text-gray-100">
                  Ensuring the highest quality of accountable service.
                </h2>
              </div>
              <div className="card-body card bg-[#1a1a1a] w-72 hover:scale-105">
                <h2 className="card-title text-center md:h-[120px] text-gray-100">
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
