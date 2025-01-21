import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import bg from "../../assets/images/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg"

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="h-[500px] text-center text-white ">
        {/* Cover Section */}
        <div className="relative">
          <img
            src={bg}
            alt="Cover Background"
            className="w-full h-[200px] object-cover"
          />
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg">
            <img
              src={user.photoURL}
              alt={user.name}
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center pt-36 ">
          <div className="bg-white shadow-lg border border-blue-900 rounded-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{user.displayName}</h2>
            <p className="text-gray-600 mt-2">Email: {user.email}</p>

            {/* Profile Message */}
            <p className="text-sm text-gray-500 mt-4">
              Welcome to your profile! Here, you can manage your account...
            </p>

            <Link
              to="/dashboard/update-profile"
              className="btn  bg-gradient-to-r from-[#6081a9] to-[#274260] mt-4 w-full rounded-none text-white"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
