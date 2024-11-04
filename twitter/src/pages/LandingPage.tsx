import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <header className="h-[100vh] w-full flex flex-col lg:flex-row bg-black">
      {/* left */}
      <div className="flex-1 flex items-center justify-center">
        <svg
          className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* right */}
      <div className="flex-1 text-gray-300 p-4 lg:p-0 text-center lg:text-start">
        <div className="font-bold text-4xl lg:text-7xl mt-10 lg:mt-[100px]">
          Happening Now
        </div>
        <p className="mt-4 lg:mt-[40px] text-xl lg:text-3xl font-bold">
          Join today.
        </p>

        <button className="bg-white text-black w-full lg:w-[400px] py-3 mt-10 rounded-md hover:bg-gray-200 flex justify-center items-center">
          <span>Sign up with Google</span>
          <FaGoogle className="ml-3" />
        </button>

        <button className="bg-white text-black w-full lg:w-[400px] py-3 mt-2 rounded-md hover:bg-gray-200 flex justify-center items-center">
          <span>Sign up with Apple</span>
          <FaApple className="ml-3" />
        </button>

        <p className="mt-4">or</p>

        <button
          onClick={() => navigate(`/register`)}
          className="bg-blue-600 text-white w-full lg:w-[400px] py-3 mt-2 rounded-md hover:bg-blue-700"
        >
          Create account
        </button>

        <p className="text-xs mt-2">
          By signing up, you agree to the{" "}
          <span className="text-blue-400 cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="text-blue-400 cursor-pointer">Privacy Policy</span>.
        </p>

        <p className="mt-4">Already have an account?</p>
        <p
          className="text-blue-400 cursor-pointer hover:underline"
          onClick={() => navigate(`/login`)}
        >
          Sign in
        </p>
      </div>
    </header>
  );
}

export default LandingPage;