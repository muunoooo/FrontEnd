"use client";

import Director from "@/components/TeamPage/Director";
import Staff from "@/components/TeamPage/Staff";
import Wrapper from "@/components/wrapper";

export default function TeamSection() {
  return (
    <div className=" mx-2">
      <Wrapper>
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <div className="text-3xl md:text-4xl mt-7">
            Our <span className="text-[#45daf8]">Team</span>
          </div>
          <div className=" flex flex-col gap-5 text-lg md:text-xl">
            <p>
              At <span className="text-[#45daf8]">Geovasi</span>, our team of
              dedicated experts brings together a unique blend of skills and
              experience across geosciences, technology, and engineering.
            </p>
            <p>
              Our members are not only highly skilled in specialized areas such
              as{" "}
              <span className="text-[#2596be]">
                Ground Penetrating Radar (GPR) surveys
              </span>
              ,{" "}
              <span className="text-[#2596be]">
                Electrical Resistivity Tomography (ERT)
              </span>
              , and <span className="text-[#2596be]">aerial mapping</span>, but
              they also excel in data{" "}
              <span className="text-[#2596be]">interpretation</span> and{" "}
              <span className="text-[#2596be]">
                innovative problem-solving.
              </span>
            </p>
            <p>
              With a strong foundation in{" "}
              <span className="text-[#2596be]">geological engineering</span>,{" "}
              <span className="text-[#2596be]">remote sensing</span>, and{" "}
              <span className="text-[#2596be]">
                advanced software development
              </span>
              , our team is equipped to tackle complex environmental challenges
              and deliver precise, actionable insights.
            </p>
            <p>
              Each member is committed to upholding{" "}
              <span className="text-[#45daf8]">Geovasi&apos;s</span> values of{" "}
              <span className="text-[#2596be]">
                integrity, accuracy, and sustainable impact
              </span>
              . Ensuring that we meet and exceed the expectations of our clients
              in every project.
            </p>
            <p className="text-3xl mt-10 font-extrabold text-[#2596be]">
              Meet Our Team...
            </p>
          </div>
          <Director />
          <Staff />
        </div>
      </Wrapper>
    </div>
  );
}
