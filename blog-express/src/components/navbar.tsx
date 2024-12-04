import Link from "next/link";
import { Avatar } from "./avatar";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full bg-white shadow-md z-10 sticky top-0 px-20">
      <div className="flex items-center justify-between h-full px-4">
        <Link href="/" className="flex items-center gap-2">
          <p className="text-md text-black font-bold">便りKonoha News</p>
        </Link>

        <Avatar />
      </div>
    </div>
  );
}
