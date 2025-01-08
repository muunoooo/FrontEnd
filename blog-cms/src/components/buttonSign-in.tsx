"use client";

import { signInWithGoogle } from "@/libs/auth";

export default function ButtonSignIn() {
  return (
    <button
      onClick={signInWithGoogle}
      className="bg-white text-black font-medium py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
    >
      Sign in with Google
    </button>
  );
}
