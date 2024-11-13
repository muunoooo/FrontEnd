import Wrapper from "@/components/wrapper";
import Image from "next/image";
import React from "react";

export default function Testi() {
  return (
    <div className="bg-[#05141b] py-12">
      <Wrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            What <span className="text-[#4aa7d3]">Our</span> Clients Say
          </h2>
          <p className="text-gray-300">
            Testimonials from valued partners and clients
          </p>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card bg-[#0d1b22] max-w-sm shadow-lg rounded-lg p-6">
              <figure className="flex justify-center items-center">
                <Image
                  src={"/Foto/onum1.jpg"}
                  alt="Muno, CEO of PT.Muno"
                  height={150}
                  width={150}
                  className="rounded-full shadow-md"
                />
              </figure>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#e0f4f8]">Mr. Muno</h3>
                <p className="text-sm text-[#4aa7d3]">CEO, PT. Muno</p>
                <p className="mt-4 text-gray-300">
                  &quot;Working with PT{" "}
                  <span className="text-[#4aa7d3]">Geovasi</span> has been
                  instrumental to our success. Their expertise and commitment to
                  quality set them apart.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card bg-[#0d1b22] max-w-sm shadow-lg rounded-lg p-6">
              <figure className="flex justify-center items-center">
                <Image
                  src={"/Foto/onum2.JPG"}
                  alt="James, CEO of PT.Banana"
                  height={150}
                  width={150}
                  className="rounded-full shadow-md"
                />
              </figure>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-[#e0f4f8]">Mr. James</h3>
                <p className="text-sm text-[#4aa7d3]">CEO, PT. Banana</p>
                <p className="mt-4 text-gray-300">
                  &quot;The team at PT{" "}
                  <span className="text-[#4aa7d3]">Geovasi</span> brought
                  expertise and commitment that exceeded our expectations. They
                  understand our industry needs thoroughly and deliver results
                  consistently.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
