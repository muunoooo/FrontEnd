
import SkillsMarquee from "@/components/skills";
import Wrapper from "@/components/wrapper";
import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-[#2f3036 ] flex flex-col justify-center items-center text-center py-12"
    >
      <Wrapper>
        <div className="max-w-4xl w-full rounded-lg p-6 md:p-10 text-white">
          <h2 className="text-3xl font-bold border-8 border-black  mb-6">
            ABOUT ME
          </h2>
          {/* Center the image */}

          {/* Text content */}
          <div className="text-justify flex flex-col gap-4">
            <p className="text-sm  leading-relaxed">
              My name is Muhammad Naufal, and I am transitioning from a mining
              career to the exciting world of IT. Driven by a passion for
              technology and its potential to shape the future, I am dedicated
              to mastering modern tools, solving complex problems, and growing
              within this dynamic industry
            </p>
            <div className="flex justify-center my-6">
              <Image
                src={"/Education/onum1.jpg"}
                alt="Muhammad Naufal"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed">
              My experience in mining has honed my ability to work effectively
              in teams, communicate clearly to achieve shared goals, and adapt
              to new environments. These skills have been invaluable in my
              transition to IT, where collaboration, problem-solving, and
              continuous learning are essential. I am eager to leverage these
              strengths to excel in this field and make a meaningful impact on
              the teams and projects I contribute to.
            </p>
          </div>
        </div>
        <p>
          my skills :
        </p>
        {/* <MarqueeWrapper/> */}
        <SkillsMarquee/>
      </Wrapper>
    </div>
  );
}
