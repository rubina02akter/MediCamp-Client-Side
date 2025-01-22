import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import footerImg from "../../src/assets/images/different-people-doing-volunteer-work.jpg";
import footerInfoImg from "../../src/assets/images/doctor-patient-ophthalmologist-s-office.jpg";
import bg from "../../src/assets/images/medical-assistant-helping-patient-with-physiotherapy-exercises.jpg";

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
    <div className="">
      {/* Main Footer Section */}
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-11/12 mx-auto gap-8 relative">
          
          {/* Footer Logo and Image */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <img
              src={footerImg}
              alt="Footer Logo"
              className="w-32 md:w-48 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
            <div className="text-lg font-bold">Medical camps</div>
            <p className="text-sm max-w-md mx-auto lg:mx-0">
              Empowering communities through volunteerism and impactful projects. Join us to make a difference.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <nav>
              <h6 className="text-lg font-semibold mb-4">Services</h6>
              <a className="link link-hover block mb-2 hover:text-blue-500">Helping</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Donating</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Funding</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Advertisement</a>
            </nav>
            <nav>
              <h6 className="text-lg font-semibold mb-4">Company</h6>
              <a className="link link-hover block mb-2 hover:text-blue-500">About Us</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Contact</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Jobs</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Press Kit</a>
            </nav>
            <nav>
              <h6 className="text-lg font-semibold mb-4">Legal</h6>
              <a className="link link-hover block mb-2 hover:text-blue-500">Terms of Use</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Privacy Policy</a>
              <a className="link link-hover block mb-2 hover:text-blue-500">Cookie Policy</a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-6">
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL">
                <FaFacebook className="text-3xl text-blue-700 hover:text-blue-500" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/rubinaakter4321">
                <FaTwitter className="text-3xl text-sky-400 hover:text-sky-300" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/rubina02akter">
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
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
          <div className="text-center p-4 mt-4">
            <p className="text-xs md:text-sm font-light opacity-80">
              Copyright © {new Date().getFullYear()} - All rights reserved by Camps Industries Ltd
            </p>
          </div>
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
