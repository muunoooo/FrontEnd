import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full bg-white shadow-md z-10 sticky top-0 px-20">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">便りKonoha News</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
