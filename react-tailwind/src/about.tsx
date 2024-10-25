import foto from "../src/assets/pexels-pixelcop-2680270.jpg";
import catur from './assets/—Pngtree—chess piece chess board black_5983384.png'
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${foto})` }}
      className="w-[100pw] h-[100vh] bg-cover bg-center flex justify-center items-center"
    >
      <div className="flex-1 text-center text-black font-bold">
      <TypeAnimation className="flex-1"
        sequence={[
          "Welcome", // Types 'One'
          1000, // Waits 1s
          "Selamat Datang", // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          "You Only Live Once",
          1000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
      </div>

      <div className="flex-1">
        <img src={catur} alt="" />
      </div>
    </div>
  );
}

export default Hero;
