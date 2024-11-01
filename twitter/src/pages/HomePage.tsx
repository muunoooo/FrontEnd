import { Beranda } from "../components/beranda"
import Leftbar from "../components/leftbar"
import RightBar from "../components/rightbar"

function HomePage () {
    return (
        // Body
        <div className="flex bg-black text-white h-[100vh] w-auto justify-center">
            <Leftbar/>
            <Beranda/>
            <RightBar/>
        </div>
    )
}

export default HomePage