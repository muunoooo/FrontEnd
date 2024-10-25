import { useRef } from "react";
import "./style.css";
import Profile from './profile'; 
import Education from './education';

function App() {
  const profileRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);

  const scrollToProfile = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEducation = () => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full h-[70px] bg-gradient-to-r from-gray-400 to-gray-600 fixed top-0 left-0 z-50 shadow-lg flex items-center justify-between px-8">
        <a className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300">
          Muhammad Naufal
        </a>
        <div className="space-x-6">
          <a
            onClick={scrollToProfile}
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Profile
          </a>
          <a
            onClick={scrollToEducation}
            className="text-white text-lg hover:text-gray-300 transition-colors duration-300 cursor-pointer"
          >
            Education
          </a>

        </div>
      </div>

      {/* Add the sections here */}
      {/* <div ref={profileRef}> */}
        <Profile /> {/* The Profile component */}
      {/* </div> */}
      {/* <div ref={educationRef}> */}
        <Education /> {/* The Education component */}
      {/* </div> */}
    </>
  );
}

export default App;
