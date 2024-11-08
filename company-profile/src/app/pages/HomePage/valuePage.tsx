import Wrapper from "@/components/wrapper";

export default function ValuePage() {
  return (
    <div className=" w-auto h-[500px] md:h-[400px] bg-[#071e26] flex flex-col justify-center">
      <Wrapper>
        <div className="text-center">
          <div className="">
            <h3 className="text-3xl md:text-4xl md:mt-16 mb-6">
              Our Value <br />
              <span className="text-4xl md:text-5xl text-[#2596be] font-extrabold">
                Proposition!
              </span>
            </h3>
          </div>
          <div className="text-start pl-7 flex flex-col gap-3">
            <h5
              className="text-2xl md:text-3xl text-[#c9fcfe] 
          text-start font-extrabold"
            >
              1. Best Service
            </h5>
            <p className="md:text-xl md:pl-7 md:mb-4">
              We provide technology-based solutions with an emphasis on safety.
            </p>
            <h5
              className="text-2xl md:text-3xl text-[#c9fcfe] 
          text-start  font-extrabold"
            >
              2. Embracing Change
            </h5>
            <p className="md:text-xl md:pl-7 md:mb-4">
              We offer reasonable prices with high-quality standards.
            </p>
            <h5
              className="text-2xl md:text-3xl text-[#c9fcfe] 
          text-start font-extrabold"
            >
              3. Acting with Integrity
            </h5>
            <p className="md:text-xl md:pl-7 md:mb-4">
              Proven geotechnical hydrology and mine impact online monitoring
              systems.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
