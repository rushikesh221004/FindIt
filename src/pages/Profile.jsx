import { useLocation, useNavigate } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiBriefcase } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) return <h2>No user data found</h2>;

  const handleEditProfile = (userData) => {
    navigate("/edit", { state: { userData } });
  };

  return (
    <div className="px-4 mt-10 w-full flex items-center min-h-screen ">
      <div className="w-full sm:w-fit sm:mx-auto">
        {/* Card Container */}
        <div className="bg-white w-full rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Background */}
          <div className="h-32 relative">
            <img
              src={user.thumbnail}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Photo */}
          <div className="relative pl-8 -mt-16 mb-4">
            <div className="relative inline-block">
              <img
                src={user.photo}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>

          {/* User Info */}
          <div className="px-4">
            <div className="sm:px-8 pb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-1">
                {user.name}
              </h2>
              <p className="text-purple-600 font-medium mb-6">
                {user.profession}
              </p>

              {/* Details Grid */}
              <div className="space-y-4">
                {/* Gender */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div
                    className={`w-10 h-10 ${
                      user.gender == "Male" ? "bg-purple-100" : "bg-pink-100"
                    } rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <LuUser
                      className={`w-5 h-5 ${
                        user.gender == "Male"
                          ? "text-purple-600"
                          : "text-pink-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      Gender
                    </p>
                    <p className="text-gray-800 font-medium">{user.gender}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      Mobile Number
                    </p>
                    <p className="text-gray-800 font-medium">{user.mobile}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdMailOutline className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      Email Address
                    </p>
                    <p className="text-gray-800 font-medium truncate">
                      {user.email}
                    </p>
                  </div>
                </div>

                {/* Profession */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiBriefcase className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      Profession
                    </p>
                    <p className="text-gray-800 font-medium">
                      {user.profession}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <SlLocationPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium mb-0.5">
                      Address
                    </p>
                    <p className="text-gray-800 font-medium">{user.address}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => handleEditProfile(user)}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Edit Profile
                </button>
                <button className="px-6 bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-200 transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
