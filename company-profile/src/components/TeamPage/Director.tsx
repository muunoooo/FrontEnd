"use client";

import Image from "next/image";
import React from "react";

export default function Director() {
  return (
    <div className="p-4">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-[#3498db]">Meet Our Director</h2>
        <p className="text-lg mt-4">
          Leading Geovasi with innovation and expertise
        </p>
      </div>

      {/* Director Card */}

      <div
        className="bg-[#34495e] shadow-xl p-8 rounded-lg  flex flex-col 
        items-center justify-center w-[340px] h-[300px]"
      >
        <figure className="px-10 pt-10">
          <Image
            src="/Team/Ganjar Satria, M.Sc.jpg"
            alt="Director"
            width={120}
            height={120}
            className="object-cover rounded-xl border-4 border-[#3498db]"
          />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title text-[#3498db] font-bold text-2xl">
            Ganjar Satria, M.Sc
          </h2>
          <p className="text-xl font-semibold">as Director</p>
        </div>
      </div>
    </div>
  );
}
