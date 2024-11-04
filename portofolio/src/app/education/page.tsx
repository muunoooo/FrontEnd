import Image from "next/image";

export default function Education() {
  return (
    <div
      id="education"
      style={{ backgroundImage: "url('/bg.svg')" }}
      className="w-full h-[100vh] bg-cover bg-center flex flex-wrap justify-center items-center relative p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>

      {/* Purwadhika Digital School Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center relative z-10 p-4">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="https://www.myeducationrepublic.com/wp-content/uploads/2022/12/Cara-Daftar-Biaya-Kuliah-di-Purwadhika-Digital-Technology-School-2023.png"
            alt="Education graphic"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Purwadhika Digital School
          </h3>
          <p className="text-lg md:text-xl italic text-gray-600">
            Web Development Student
          </p>
          <p className="text-sm md:text-md text-gray-500">October 2024 - now</p>
        </div>
      </div>

      {/* Education Overview Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center relative z-10 p-4">
        <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
          EDUCATION
        </h2>
        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg mb-4 transition-transform duration-300 hover:scale-105">
          <p className="text-black">
            A brief educational background of <strong>ME</strong>
            <br />I hold a degree in Geological Engineering and am currently
            expanding my expertise in web development at Purwadhika Digital
            School.
          </p>
        </div>
        <Image
          src={"/Education/onum10.JPG"}
          alt="muno"
          height={300}
          width={300}
          className="w-2/3 md:w-1/3 h-auto rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Padjadjaran University Section */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center relative z-10 p-4">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/LogoUNPADcolor.png"
            alt="UNPAD logo"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Padjadjaran University
          </h3>
          <p className="text-lg md:text-xl italic text-gray-600">
            Geological Engineering
          </p>
          <p className="text-sm md:text-md text-gray-500">2018-2023</p>
        </div>
      </div>
    </div>
  );
}
