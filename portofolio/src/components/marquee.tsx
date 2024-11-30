import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeWrapper() { // Renamed the component to avoid conflict
  return (
    <div className="bottom-0 w-full">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        <div className="carousel-item">
          <Image
            src={"/education/onum1.jpg"}
            alt="Image 1"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum2.jpg"}
            alt="Image 2"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum3.jpg"}
            alt="Image 3"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum4.jpg"}
            alt="Image 4"
            width={134}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum5.jpg"}
            alt="Image 5"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum6.jpg"}
            alt="Image 6"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum7.jpg"}
            alt="Image 7"
            width={112}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum8.jpg"}
            alt="Image 8"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/education/onum9.jpg"}
            alt="Image 9"
            width={200}
            height={300}
            className=" object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
}
