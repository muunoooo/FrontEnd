"use client";

import React, { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  city: string;
  description: string;
  image: string;
}

export default function Staff() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=7");
        const data = await response.json();

        const fetchedMembers = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          city: `${user.location.city} `,
          position: "Team Member",
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
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="card bg-black shadow-xl p-4">
            <figure className="px-10 pt-10">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-xl w-full h-40 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{member.name}</h2>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
