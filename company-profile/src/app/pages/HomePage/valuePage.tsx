import Wrapper from "@/components/wrapper";

export default function ValuePage() {
  return (
    <div className="w-auto h-[500px] md:h-[400px] bg-[#05141b] flex flex-col justify-center">
      <Wrapper>
        <div className="text-center">
          <div>
            <p className="text-3xl md:text-4xl md:mt-16 mb-6 text-white">
              Our Value <br />
              <span className="text-4xl md:text-5xl text-[#4aa7d3] font-extrabold">
                Proposition!
              </span>
            </p>
          </div>
          <div className="text-start pl-7 flex flex-col gap-3">
            <p className="text-2xl md:text-3xl text-[#c2f0fa] font-extrabold">
              1. Best Service
            </p>
            <p className="md:text-xl md:pl-7 md:mb-4 text-[#e0f4f8]">
              We provide technology-based solutions with an emphasis on safety.
            </p>
            <p className="text-2xl md:text-3xl text-[#c2f0fa] font-extrabold">
              2. Embracing Change
            </p>
            <p className="md:text-xl md:pl-7 md:mb-4 text-[#e0f4f8]">
              We offer reasonable prices with high-quality standards.
            </p>
            <p className="text-2xl md:text-3xl text-[#c2f0fa] font-extrabold">
              3. Acting with Integrity
            </p>
            <p className="md:text-xl md:pl-7 md:mb-4 text-[#e0f4f8]">
              Proven geotechnical hydrology and mine impact online monitoring
              systems.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
