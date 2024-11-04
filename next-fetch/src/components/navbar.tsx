import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex h-[60px] justify-center items-center gap-10 bg-black fixed w-full">
            <Link href="/">
                <p className="text-white hover:text-gray-300 px-3 py-1">Home</p>
            </Link>
            <Link href="/user">
                <p className="text-white hover:text-gray-300 px-3 py-1">User</p>
            </Link>
            <Link href="/user/register">
                <p className="text-white hover:text-gray-300 px-3 py-1">Register</p>
            </Link>
        </div>
    );
}
