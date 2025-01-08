import supabase from "@/services/supabase";
import Image from "next/image";

interface IProps {
  picture: string;
  full_name: string;
  email: string;
}

export default function Avatar({ picture, full_name, email }: IProps) {
  const handleLogOut = () => {
    supabase.auth.signOut();
  };
  return (
    <div onClick={handleLogOut} className="flex items-center my-5 cursor-pointer">
      <div className="w-10 h-10 relative">
        <Image
          className="rounded-full object-cover"
          src={`${picture}`}
          alt={full_name}
          fill
          priority
        />
      </div>
      <div className="flex-1 min-w-0 ms-4">
        <p className="text-sm font-medium text-white truncate dark:text-white">
          Halo {full_name} !
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {email}
        </p>
      </div>
    </div>
  );
}
