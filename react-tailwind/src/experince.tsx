import foto1 from "./assets/onum1.jpg";
import foto2 from "./assets/onum2.jpg";
import foto3 from "./assets/onum3.jpg";
import foto4 from "./assets/Graduationstories.id-79 - Copy.jpg";
import foto5 from "./assets/onum4.jpg";
import Marquee from "react-fast-marquee";

function Experience() {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
      {/* <div className="carousel rounded-box"> */}
        <div className="carousel-item">
          <img src={foto1} alt="Image 1" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto2} alt="Image 2" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto3} alt="Image 3" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto4} alt="Image 4" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto5} alt="Image 5" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto1} alt="Image 6" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto2} alt="Image 7" className="w-auto h-[300px]" />
        </div>
        <div className="carousel-item">
          <img src={foto3} alt="Image 8" className="w-auto h-[300px]" />
        </div>
      {/* </div> */}
    </Marquee>
  );
}

export default Experience;
