import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function SkillsMarquee() {
  // Renamed the component to avoid conflict
  return (
    <div className="bottom-0 w-full">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        <div className="carousel-item">
          <Image
            src={"/Skills/css.svg"}
            alt="Image 1"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/html.svg"}
            alt="Image 2"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/javascript.svg"}
            alt="Image 3"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/typescript.svg"}
            alt="Image 7"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/postgreSQL.svg"}
            alt="Image 4"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/react.svg"}
            alt="Image 5"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Skills/tailwind.svg"}
            alt="Image 6"
            width={100}
            height={100}
            className=" object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
}
