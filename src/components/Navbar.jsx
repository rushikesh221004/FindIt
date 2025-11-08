import logo from "../assets/logo.jpg";
import { CgSearch } from "react-icons/cg";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full py-4 px-2 md:px-14 flex items-center justify-between">
      <img src={logo} alt="fint it" className="h-10" />
      <div className="flex items-center justify-center md:gap-6 gap-2">
        <div className="relative w-fit mt-2 h-fit">
          <input
            placeholder="Search peoples..."
            className="focus:outline-none text-sm md:text-xl py-2 px-4 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-semibold"
          />
          <CgSearch className="absolute right-6 hover:cursor-pointer top-1/2 -translate-y-1/2 text-[20px] md:text-3xl text-gray-500" />
        </div>
        <div ref={dropdownRef} className="relative mt-2 inline-block">
          {/* Profile Button */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="md:h-[50px] md:w-[50px] h-[30px] w-[30px] hover:cursor-pointer overflow-hidden rounded-full"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGWFa7AzWpSug/profile-displayphoto-scale_200_200/B56ZlMe2_gJ8AY-/0/1757924784223?e=1764201600&v=beta&t=yyo1Z9CONFb4nyTBV9wdGqgyvEoZ9TaYaJgMV2TcG4A"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 z-20 w-44 rounded-lg bg-white shadow-lg border border-gray-100">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 text-[18px] font-bold">
                    Profile
                  </a>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block flex items-center justify-between text-[18px] font-bold text-red-600 px-4 py-2 hover:cursor-pointer"
                  >
                    Logout <IoLogOutOutline />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
