import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-gray-800 dark:text-white text-white">
      <div className="flex-1">
        <Link href={"/"} aria-label="Go to Geovasi Home Page">
          <Image
            src={"/navbar/logo.png"}
            alt="Geovasi Logo"
            width={200}
            height={40}
            className="hidden md:block w-28 md:w-48 lg:w-52 md:pl-5"
            aria-label="Geovasi Home Page"
          />
        </Link>

        <Link href={"/"} aria-label="Go to Geovasi Home Page">
          <Image
            src={"/navbar/Logo Kecil.png"}
            alt="Geovasi Logo Small"
            width={200}
            height={40}
            className="block md:hidden w-20 h-20 object-contain"
            aria-label="Geovasi Home Page"
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2 sm:gap-4 md:gap-6">
          <li>
            <Link
              href={"/"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
              aria-label="Go to Geovasi Home Page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/about-us"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
              aria-label="Go to Geovasi About Us Page"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href={"/our-services"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
              aria-label="Go to Geovasi Our Services Page"
            >
              Our Services
            </Link>
          </li>
          <li>
            <Link
              href={"/our-team"}
              className="px-2 sm:px-3 md:px-4 lg:text-lg font-bold"
              aria-label="Go to Geovasi Our Team Page"
            >
              Our Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
