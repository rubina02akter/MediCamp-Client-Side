import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import bg from "../../assets/images/Hexagon.svg"
import { Helmet } from "react-helmet";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <Helmet>
      <title>AdminHome|MediCamp</title>
      <meta name="description" content="Helmet application"></meta>
      </Helmet>
      <div className="h-[500px] text-center text-white bg-blue-50 min-h-screen">
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
        <div className="flex justify-center pt-36">
          <div className="bg-white shadow-lg border border-blue-900 rounded-lg p-6 w-80 text-center">
            <h2 className="text-xl font-semibold text-gray-800">{user.displayName}</h2>
            <p className="text-gray-600 mt-2">Email: {user.email}</p>

            {/* Profile Message */}
            <p className="text-sm text-gray-500 mt-4">
              Welcome to your profile! Here, you can manage your account...
            </p>

            <Link
              to="/dashboard/update-profile"
              className="btn text-white bg-[#2B4C86] mt-4 w-full rounded-md "
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
