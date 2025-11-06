import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

function RegisterComp() {
  return (
    <div className="h-screen w-full flex items-center bg-[#000000bc]">
      <div className="w-1/2 px-20 flex items-center flex-col justify-center h-[90%]">
        <div>
          <h1 className="text-7xl mb-6 font-semibold">Let's Get Started</h1>
          <p className="text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </div>
      </div>
      <div className="w-[50%] flex items-center justify-evenly h-full bg-[#000000a1]">
        <div className="w-[50%] px-5">
          <h2 className="text-4xl font-bold">Sign Up</h2>
          <div className="flex flex-col gap-16 mt-10">
            <input
              type="text"
              placeholder="Your name"
              className="text-lg font-semibold border-0 border-b-[1px] px-2 border-gray-500 py-2 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              className="text-lg font-semibold border-0 border-b-[1px] px-2 border-gray-500 py-2 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Create password"
              className="text-lg font-semibold border-0 border-b-[1px] px-2 border-gray-500 py-2 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Repeat password"
              className="text-lg font-semibold border-0 border-b-[1px] px-2 border-gray-500 py-2 focus:outline-none"
            />
          </div>
          <div>
            <button className="text-xl hover:cursor-pointer mt-20 w-full font-semibold px-20 py-3 bg-[#018049]">
              Sign up
            </button>
            <div className="flex w-full items-center justify-between mt-5 px-6">
              <p className="text-lg font-semibold">Already a member?</p>
              <Link to="/login"><p className="text-[#018049] text-lg font-semibold">
                Sign in here
              </p></Link>
            </div>
          </div>
        </div>
        <div className="h-full flex gap-6 items-center flex-col justify-center">
          <div className="w-[1px] bg-gray-500 h-[30%]"></div>
          <p className="text-lg font-semibold">OR</p>
          <div className="w-[1px] bg-gray-500 h-[30%]"></div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="p-2 bg-white rounded-full hover:cursor-pointer">
            <FaFacebookF className="text-black text-2xl" />
          </div>
          <div className="p-2 bg-white rounded-full cursor-pointer">
            <FaTwitter className="text-black text-2xl" />
          </div>
          <div className="p-2 bg-white rounded-full cursor-pointer">
            <AiOutlineGoogle className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComp;
