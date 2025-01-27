import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import footerImg from "../../src/assets/images/4790263_49081.jpg";
import footerInfoImg from "../../src/assets/images/5604927_57035.jpg";
import bg from "../../src/assets/images/medical-assistant-analyzing-documents-files-monitor-night-nurse-looking-computer-working-healthcare-appointment-with-checkup-papers-doing-overtime-work-desk.jpg";
import Newsletter from "./Newsletter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // Reset email field after submission
    }
  };

  return (
    <div>
      {/* Main Footer Section */}
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-11/12 mx-auto gap-8 relative">
          {/* Footer Logo and Image */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <img
              src={footerImg}
              alt="Footer Logo"
              className="w-32 md:w-48 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
            <div className="text-lg font-bold">Medi-Camps</div>
            <p className="text-sm max-w-md mx-auto lg:mx-0">
              Stay informed about the latest medical camps and volunteer
              opportunities. Subscribe to our newsletter and help make a
              difference in communities.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <nav>
              <h6 className="text-lg font-semibold mb-4">MCMS Features</h6>
              <a className="link link-hover block mb-2 hover:text-blue-500">
                Organize Camps
              </a>
              <a className="link link-hover block mb-2 hover:text-blue-500">
                Register as a Participant
              </a>
              <a className="link link-hover block mb-2 hover:text-blue-500">
                Feedback and Ratings
              </a>
              <a className="link link-hover block mb-2 hover:text-blue-500">
                Manage Payments
              </a>
              <a className="link link-hover block mb-2 hover:text-blue-500">
                Monitor Attendance
              </a>
            </nav>

            <nav>
              <h6 className="text-lg font-semibold mb-4">Explore Quick Routes</h6>
              <Link
                to="/available-camps"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                All Camps
              </Link>
              <Link
                to="/contact"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Contact
              </Link>
            </nav>

           
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL"
              >
                <FaFacebook className="text-3xl text-blue-700 hover:text-blue-500" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/rubinaakter4321"
              >
                <FaTwitter className="text-3xl text-sky-400 hover:text-sky-300" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/rubina02akter"
              >
                <FaGithub className="text-3xl text-gray-700 hover:text-gray-500" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaInstagram className="text-3xl text-red-400 hover:text-red-300" />
              </a>
            </div>
            <div>
              <img
                src={footerInfoImg}
                alt="Footer Info"
                className="w-32 md:w-48 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="relative mt-12">
          <Newsletter></Newsletter>
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
          <div className="text-center p-4 mt-4">
            <p className="text-xs md:text-sm font-light opacity-80">
              Copyright © {new Date().getFullYear()} - All rights reserved by
              MediCamps Industries Ltd
            </p>
          </div>
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
