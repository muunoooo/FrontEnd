import foto from "../src/assets/pexels-pixelcop-2680270.jpg";
import me from './assets/Muno1.png';

function ProfileCard() {
  return (
    <div
    id='about'
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 profile-section"
      style={{
        backgroundImage: `url(${foto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-5xl font-bold text-black">PROFILE</h1>
        <p className="text-black font-semibold text-lg">I'm a student web developer</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row justify-around items-center w-full max-w-4xl relative z-10">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="text-gray-600 mb-4">
            I'm passionate about web development and always eager to learn new technologies. Currently pursuing web development studies to enhance my skills.
          </p>
        </div>

        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={me}
            alt="Profile"
            className="w-400 h-40 rounded-full shadow-lg"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <p className="text-gray-600"><span className="font-bold">Name:</span> Muhammad Naufal</p>
          <p className="text-gray-600"><span className="font-bold">Born:</span> Trondheim</p>
          <p className="text-gray-600"><span className="font-bold">Age:</span> 24 years</p>
          <p className="text-gray-600"><span className="font-bold">Location:</span> Indonesia, Earth</p>


          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i> {/* Add Font Awesome Icons */}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
