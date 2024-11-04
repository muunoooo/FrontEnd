import Marquee from "react-fast-marquee";

export default function AboutPage() {
  return (
    // master
    <div
      className="w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <div className="flex-grow flex flex-col justify-center items-center">
        <p className="text-black font-bold text-3xl">ahh you here!</p>
        <p className="text-black text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          doloribus consectetur ducimus delectus, distinctio consequatur vero?
          Quasi suscipit minus non ad repudiandae sint possimus, aliquid, hic
          esse a optio aperiam. Incidunt optio voluptas maxime facere illum nemo
          esse aspernatur neque aut mollitia pariatur deserunt dolore aperiam
          quod, tempora sapiente dolor eius animi eos porro? Qui architecto
          impedit dignissimos dolorum, quasi sint praesentium voluptatibus
          perferendis quas fugiat ab, doloremque consectetur odio porro
          voluptates a dolore aut perspiciatis esse magni ipsam possimus
          debitis eaque! Odit at perferendis voluptate. Odit animi eaque quos
          assumenda perferendis. Quasi adipisci sit enim quidem illum deleniti
          dolore, veritatis iusto amet quos facere voluptate corrupti earum,
          odio voluptatibus sapiente quaerat distinctio.
        </p>
      </div>
      {/* Marquee at the bottom */}
      <div className="absolute bottom-0 w-full">
        <Marquee speed={100} gradient={false} pauseOnHover={true}>
          <div className="carousel-item">
            <img src="onum1.jpg" alt="Image 1" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum2.jpg" alt="Image 2" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum3.jpg" alt="Image 3" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum4.jpg" alt="Image 4" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum1.jpg" alt="Image 5" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum2.jpg" alt="Image 6" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum3.jpg" alt="Image 7" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum4.jpg" alt="Image 8" className="w-auto h-[200px]" />
          </div>
          <div className="carousel-item">
            <img src="onum2.jpg" alt="Image 6" className="w-auto h-[200px]" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
