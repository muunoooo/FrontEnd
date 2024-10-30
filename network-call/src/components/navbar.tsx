import { Link } from "react-router-dom"

function Navbar () {
    return (
        <div className="flex justify-center gap-20 items-center bg-[#FF4191]
        font-bold rounded-md
        w-100% h-[80px]">
            <Link to={"/"} className=" rounded-md">Home</Link>
            <Link to={"/register"} className=" rounded-md">Register</Link>
        </div>
    )
}

export default Navbar