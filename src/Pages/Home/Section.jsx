import { Button } from "daisyui";
import { FaHeartbeat, FaUserMd, FaClipboardList, FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2B4E86] mb-6">
          Welcome to Medical Camp Management System
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          A seamless platform for managing and coordinating medical camps. Whether you're an organizer or a participant, we've got you covered with the best tools for efficient camp management.
        </p>
        <div className="flex justify-center gap-4">
          <Link to='/available-camps' className="btn bg-[#2B4E86] text-white btn-lg">Explore Camps <FaArrowCircleRight></FaArrowCircleRight></Link>
          <Link to='/signup' className="btn bg-rose-700 text-white btn-lg">Register Now</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        <div className="p-6 shadow-lg rounded-xl bg-white">
          <FaHeartbeat className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2 text-center">
            Health & Wellness
          </h3>
          <p className="text-gray-600 text-center">
            Promote a healthy lifestyle by organizing medical check-ups and wellness programs.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <FaUserMd className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2 text-center">
            Expert Doctors
          </h3>
          <p className="text-gray-600 text-center">
            Collaborate with skilled medical professionals to ensure quality care at your camps.
          </p>
        </div>

        <div className="p-6 shadow-lg rounded-xl bg-white">
          <FaClipboardList className="text-blue-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-blue-800 mb-2 text-center">
            Streamlined Management
          </h3>
          <p className="text-gray-600 text-center">
            Easily track registrations, payments, and participant details with our system.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Section;
