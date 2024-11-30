import Wrapper from "@/components/wrapper";

export default function About() {
  return (
    <div
      id="about"
      className="w-full min-h-screen bg-[#FFFC9B] flex flex-col justify-center items-center text-center py-12"
      // Optional: add a background image for more depth
      // style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <Wrapper>
        <div className="max-w-4xl w-full rounded-lg p-6 md:p-10">
          <h2 className="text-3xl font-bold border-8 border-black text-black mb-6">
            ABOUT ME
          </h2>
          <div className="my-20">
            <p className="text-lg text-gray-800 mb-4">
              My name is Muhammad Naufal, and I have embarked on an exciting
              journey of transitioning from a career in mining to the dynamic
              world of IT. After years of experience in the mining industry, I
              realized my true passion lies in technology and its potential to
              shape the future. This realization has fueled my determination to
              explore IT in depth, from mastering the latest tools and
              technologies to understanding the complexities of software
              development and problem-solving.
            </p>

            <p className="text-lg text-gray-800 mb-6">
              I am eager to grow and thrive in this fast-paced field by
              embracing challenges and continuously improving my skills. With a
              strong commitment to learning, adaptability, and a drive to
              succeed, I am ready to level up my abilities and contribute
              meaningfully to any IT environment I join. My goal is not only to
              advance my career but also to make a positive impact in the
              ever-evolving tech industry.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block mt-6 bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </Wrapper>
    </div>
  );
}
