import { useLocation } from "react-router-dom";

export default function Edit() {
  const location = useLocation();
  const userData = location.state?.userData;

  if (!userData) return <h2>User data not found</h2>;

  console.log(userData);

  return (
    <div className="px-2 min-h-screen py-20">
      <div className="bg-white max-w-[500px] h-fit mx-auto px-8 rounded-3xl shadow-2xl overflow-hidden py-10 ">
        <div>
          <h2 className="text-center font-bold text-2xl mb-8">
            Edit Your Profile
          </h2>
        </div>
        <div className="w-full gap-8 flex flex-col items-center">
          <input
            placeholder="Full name"
            type="text"
            className="focus:outline-none w-full text-lg py-3 px-6 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold"
          />
          <input
            placeholder="Your profession"
            type="text"
            className="focus:outline-none w-full text-lg py-3 px-6 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold"
          />
          <select
            className="focus:outline-none w-full text-lg py-3 px-6 pr-10 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              Choose gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            placeholder="Mobile number (e.g., +91 98765 *****)"
            type="number"
            className="focus:outline-none w-full text-lg py-3 px-6 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold"
          />
          <input
            placeholder="Email (e.g., you@example.com)"
            type="email"
            className="focus:outline-none w-full text-lg py-3 px-6 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold"
          />
          <input
            placeholder="Full address (with city & state)"
            type="text"
            className="focus:outline-none w-full text-lg py-3 px-6 lg:px-6 lg:py-3 rounded-full bg-gray-100 font-bold"
          />
        </div>
        <button className="flex-1 w-full mt-10 hover:cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
