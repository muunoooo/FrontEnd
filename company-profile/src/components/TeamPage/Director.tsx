"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  picture: {
    large: string;
  };
}

interface TeamMember {
  name: string;
  position: string;
  city: string;
  description: string;
  image: string;
}

export default function Director() {
  const [director, setDirector] = useState<TeamMember | null>(null);

  useEffect(() => {
    const fetchDirector = async () => {
      try {
        // Fetch the Director's data
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();

        const fetchedDirector = {
          name: `${data.results[0].name.first} ${data.results[0].name.last}`,
          position: "Director",
          city: data.results[0].location.city,
          description: `${data.results[0].name.first} is the leader of our team.`,
          image: data.results[0].picture.large,
        };
        setDirector(fetchedDirector);
      } catch (error) {
        console.error("Failed to fetch director:", error);
      }
    };

    fetchDirector();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-[#3498db]">Meet Our Director</h2>
        <p className="text-lg mt-4">
          Leading Geovasi with innovation and expertise
        </p>
      </div>

      {/* Director Card */}
      {director && (
        <div className="mb-12">
          <div className="card bg-[#34495e] shadow-xl p-8 rounded-lg">
            <figure className="px-10 pt-10">
              <Image
                src={director.image}
                alt="Director"
                width={120}
                height={120}
                className="rounded-xl border-4 border-[#3498db]"
              />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h2 className="card-title text-[#3498db] font-bold text-2xl">
                {director.name}
              </h2>
              <p className="text-xl font-semibold">as {director.position}</p>
              <p className="mt-4">{director.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
