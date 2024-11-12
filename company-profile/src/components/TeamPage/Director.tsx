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
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        const data = await response.json();

        const fetchedMembers = data.results.map((user: User) => ({
          name: `${user.name.first} ${user.name.last}`,
          city: `${user.location.city} `,
          position: "Director",
          description: `${user.name.first} is a dedicated team member contributing to our project.`,
          image: user.picture.large,
        }));

        setTeamMembers(fetchedMembers);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);
  return (
    <div>
      <div>
        {teamMembers.map((member, idx) => (
          <div key={idx} className="">
            <div className="card bg-white  shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={member.image}
                  alt="Director"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-[#071e26] font-bold text-xl">{member.name}</h2>
                <p> as Director</p>
                <div className="card-actions">
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
