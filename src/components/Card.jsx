import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import users from "./user.js";

export default function Card() {
  return (
    <div className="min-h-screen w-full flex mt-10 justify-center py-4 px-3">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:grid-rows-4 lg:max-w-[1000px] xl:grid-cols-3 xl:grid-rows-3 xl:max-w-[1300px] 2xl:max-w-[1400px] 2xl:gap-20 mx-auto grid-rows-8">
        {users.map((data, index) => (
          <div key={index} className="max-w-md">
            {/* Card Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Header Background */}
              <div className="h-32 relative">
                <img
                  src={data.thumbnail}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Photo */}
              <div className="relative px-8 -mt-16 mb-4">
                <div className="relative inline-block">
                  <img
                    src={data.photo}
                    alt={data.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* User Info */}
              <div className="px-8 pb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">
                  {data.name}
                </h2>
                <p className="text-purple-600 font-medium mb-6">
                  {data.profession}
                </p>

                {/* Details Grid */}
                <div className="space-y-4">
                  {/* Gender */}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className={`w-10 h-10 ${data.gender == "Male" ? "bg-purple-100" : "bg-pink-100"} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <LuUser className={`w-5 h-5 ${data.gender == "Male" ? "text-purple-600" : "text-pink-600"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium mb-0.5">
                        Gender
                      </p>
                      <p className="text-gray-800 font-medium">{data.gender}</p>
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                    View Profile
                  </button>
                  <button className="px-6 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
