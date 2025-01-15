"use client";

import Image from "next/image";
import React from "react";

export default function Founder() {
  return (
    <div className="p-4">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-[#3498db]">Meet Our Founder</h2>
        <p className="text-lg mt-4">
          Leading Geovasi with innovation and expertise
        </p>
      </div>

      {/* Founder Card */}

      <div className="mb-12 flex gap-2">
        <div className="card bg-[#34495e] shadow-xl p-8 rounded-lg">
          <figure className="rounded-t-lg relative overflow-hidden">
            <Image
              src="/Team/Noviarso Wicaksono.jpg"
              alt="Founder"
              height={120}
              width={120}
              objectFit=""
              className="object-cover rounded-t-lg border-4 border-[#3498db]"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title text-[#3498db] font-bold text-2xl">
              Noviarso Wicaksono
            </h2>
            <p className="text-xl font-semibold">as Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
