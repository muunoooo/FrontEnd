import Link from "next/link";
import Wrapper from "./wrapper";

export default function Navbar() {
  return (
    <div className="h-[60px] bg-white shadow-md z-10 sticky top-0">
      <Wrapper>
        <div className="flex justify-center items-center h-full px-4">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-lg font-semibold">便り</span>
              <span className="text-2xl font-semibold">Konoha News</span>
            </div>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
