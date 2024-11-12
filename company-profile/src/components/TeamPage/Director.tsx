"use client";

import React, { useEffect, useState } from "react";

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
    <div>
      <div>
        {teamMembers.map((member, idx) => (
          <div key={idx} className="">
            <div className="card bg-white  shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src= {member.image}
                  alt="Director"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{member.name}</h2>
                <p>Director</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
