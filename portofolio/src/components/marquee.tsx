import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeWrapper() { // Renamed the component to avoid conflict
  return (
    <div className="bottom-0 w-full">
      <Marquee speed={60} gradient={false} pauseOnHover={true}>
        <div className="carousel-item">
          <Image
            src={"/Education/onum1.jpg"}
            alt="Image 1"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum2.jpg"}
            alt="Image 2"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum3.jpg"}
            alt="Image 3"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum4.jpg"}
            alt="Image 4"
            width={134}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum5.jpg"}
            alt="Image 5"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum6.jpg"}
            alt="Image 6"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum7.jpg"}
            alt="Image 7"
            width={112}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum8.jpg"}
            alt="Image 8"
            width={150}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="carousel-item">
          <Image
            src={"/Education/onum9.jpg"}
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
{/* <Marquee speed={60} gradient={false}>
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <Link
              href={"https://www.amman.co.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/amman.png"}
                alt="AMMAN MINERAL"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://vale.com/in/indonesia"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/vale.png"}
                alt="Vale"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://sumbawatimurmining.com/id/home-id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/STM.png"}
                alt="Sumbawa Timur Mining"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://brin.go.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/BRIN.png"}
                alt="BRIN"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://www.amman.co.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/amman.png"}
                alt="AMMAN MINERAL"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://vale.com/in/indonesia"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/vale.png"}
                alt="Vale"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://sumbawatimurmining.com/id/home-id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/STM.png"}
                alt="Sumbawa Timur Mining"
                height={80}
                width={80}
                className="t hover:scale-100"
              />
            </Link>
            <Link
              href={"https://brin.go.id/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/testimonial/BRIN.png"}
                alt="BRIN"
                height={80}
                width={80}
                className="t hover:scale-100"
              /> */}