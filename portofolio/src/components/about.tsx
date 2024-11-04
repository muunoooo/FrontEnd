import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function About() {
  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div
        className="flex flex-1 flex-col justify-center items-center  px-4 sm:px-0
       h-screen 
      "
      >
        <p className="text-black font-bold text-2xl sm:text-3xl">TO KNOW ME</p>
        <div className="mt-4 sm:mt-10">
          <p className="text-black text-xs sm:text-sm leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet culpa
            cumque recusandae saepe modi odio quo itaque perferendis eveniet
            dolor dolorem et, quod hic nulla, explicabo voluptatum veritatis
            nemo perspiciatis, quis numquam similique asperiores debitis
            laudantium! Possimus quod omnis minima cum veritatis modi, nemo
            aperiam quos ratione dicta culpa pariatur facere, amet quas tempora
            quam? Veritatis repellat commodi, ut magni ea praesentium omnis iste
            perferendis voluptates eligendi illo, dignissimos fugiat laborum
            quibusdam id perspiciatis reprehenderit similique alias est nesciunt
            magnam beatae nihil odit! Inventore officia, corrupti architecto
            perspiciatis et ratione culpa magni possimus, itaque pariatur
            expedita aperiam recusandae, quas eum.
          </p>
        </div>
      </div>
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
    </div>
  );
}
