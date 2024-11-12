"use client";

import Director from "@/components/TeamPage/Director";
import Staff from "@/components/TeamPage/Staff";
import Wrapper from "@/components/wrapper";

export default function TeamSection() {
  return (
    <div className="">
      <Wrapper>
        <div className="flex flex-col gap-5 justify-center items-center text-center">
          <div className="text-3xl md:text-4xl mt-7">Our Team</div>
          <div>
            At Geovasi, our team of dedicated experts brings together a unique
            blend of skills and experience across geosciences, technology, and
            engineering. Our members are not only highly skilled in specialized
            areas such as Ground Penetrating Radar (GPR) surveys, Electrical
            Resistivity Tomography (ERT), and aerial mapping, but they also
            excel in data interpretation and innovative problem-solving. With a
            strong foundation in geological engineering, remote sensing, and
            advanced software development, our team is equipped to tackle
            complex environmental challenges and deliver precise, actionable
            insights. Each member is committed to upholding Geovasi's values of
            integrity, accuracy, and sustainable impact, ensuring that we meet
            and exceed the expectations of our clients in every project.
          </div>
          <Director />
          <Staff />
        </div>
      </Wrapper>
    </div>
  );
}
