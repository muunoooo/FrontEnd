import Wrapper from "@/components/wrapper";
import Image from "next/image";
import React from "react";

export default function Testi() {
  return (
    <div className="bg-[#071e26] py-12">
      <Wrapper>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold ">What Our Clients Say</h2>
          <p className="">Testimonials from valued partners and clients</p>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card bg-black max-w-sm shadow-lg rounded-lg p-6">
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
                <h3 className="text-xl font-semibold text-gray-800">Muno</h3>
                <p className="text-sm text-gray-500">CEO, PT. Muno</p>
                <p className="mt-4 text-gray-700">
                  &quot;Working with PT{" "}
                  <span className="text-[#2596be]">Geovasi</span> has been
                  instrumental to our success. Their expertise and commitment to
                  quality set them apart.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="card bg-black max-w-sm shadow-lg rounded-lg p-6">
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
                <h3 className="text-xl font-semibold text-gray-800">Muno</h3>
                <p className="text-sm text-gray-500">CEO, PT. Muno</p>
                <p className="mt-4 text-gray-700">
                  &quot;Working with PT{" "}
                  <span className="text-[#2596be]">Geovasi</span> has been
                  instrumental to our success. Their expertise and commitment to
                  quality set them apart.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
