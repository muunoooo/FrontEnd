"use client"

import { signInWithGoogle } from "@/libs/auth";

export default function ButtonSignIn() {
  return (
    <button 
    onClick={signInWithGoogle}
    className="bg-black text-white rounded-md hover:scale-105">Sign in</button>
  )
}
