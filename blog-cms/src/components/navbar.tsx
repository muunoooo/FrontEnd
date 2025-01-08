"use client";

import Link from "next/link";
import ButtonSignIn from "./buttonSign-in";
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div className="h-[60px] w-full bg-black top-0 px-4 md:px-20">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white hover:text-gray-200 transition">
              Berita Terkini
            </span>
          </Link>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-4">
          {/* User Section */}
          {user ? (
            <Avatar
              picture={user.user_metadata.picture}
              full_name={user.user_metadata.name}
              email={user.user_metadata.email}
            />
          ) : (
            <ButtonSignIn />
          )}
        </div>
      </div>
    </div>
  );
}
