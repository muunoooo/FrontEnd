import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-800">
      <div className="flex-1">
        {/* Large logo - hidden on small screens */}
        <Link href={"/"} aria-label="about geovasi">
          <Image
            src={"/navbar/logo.png"}
            alt="GevoasiLogo"
            width={200}
            height={40}
            className="hidden md:block w-28 md:w-48 lg:w-52 md:pl-5"
            aria-label="geovasi home"
          />
        </Link>
        {/* Small logo - visible on small screens only */}
        <Link href={"/"}>
          <Image
            src={"/navbar/Logo Kecil.png"}
            alt="GevoasiLogo"
            width={200}
            height={40}
            className="block md:hidden w-20 h-auto"
             aria-label="geovasi home"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 sm:gap-4 md:gap-6">
          <li>
            <Link
              href={"/"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
               aria-label="geovasi home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about-us"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
               aria-label="geovasi about us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"/our-services"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
               aria-label="geovasi services"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href={"/our-team"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
               aria-label="geovasi team"
            >
              Our Teams
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
