import logo from "../assets/logo.jpg";
import { CgSearch } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="w-full py-4 px-14 flex items-center justify-between">
      <img src={logo} alt="fint it" className="h-10" />
      <div>
        <div className="relative w-fit h-fit">
          <input
            placeholder="Search peoples..."
            className="focus:outline-none text-xl px-6 py-4 rounded-full bg-gray-100 font-semibold"
          />
          <CgSearch className="absolute right-6 hover:cursor-pointer top-1/2 -translate-y-1/2 text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
}
