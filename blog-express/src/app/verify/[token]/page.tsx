"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function verifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/verify/${params.token}`,
        {
          method: "PATCH",
        }
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
      router.push("/")
    }
  };

  useEffect(()=> {
    onVerify()
  },[])

  return (
    <div className="flex flex-col text-center justify-center items-center ">
      {/* <h1>welcome to verify page</h1>
      <button
        className="bg-blue-400 rounded-md w-[100px] h-[30px]"
        onClick={onVerify}
      >
        verification
      </button> */}
    </div>
  );
}
