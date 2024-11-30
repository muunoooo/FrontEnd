// components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-[#657883] text-black px-5">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href={"/"} className="text-lg font-bold">
          Portofolio
        </Link>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Click me
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-[#657883] rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
              <li>
                {/* This link will now scroll to the About section */}
                <Link href="#home">Home</Link>
                <Link href="#about">About Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
