import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Contact = () => {
  const form = useRef(); // Reference to the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_zoz4ljf", // Replace with your EmailJS service ID
        "template_6heruhf", // Replace with your EmailJS template ID
        form.current, // Pass the form reference
        "VRFM_O95r8Tg1hHWL" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          Swal.fire({
            title: "Email send successfully!",
            icon: "success",
            draggable: true
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("There was an error sending your message. Please try again.");
        }
      );

    e.target.reset(); 
  };

  return (
    <>
    <Helmet>
    <title>Contact|MediCamp</title>
    <meta name="description" content="Helmet application"></meta>
    </Helmet>

    <div className="bg-[#EBF3FE] min-h-screen text-[#5d8ddb] py-24 px-10 flex flex-col-reverse lg:flex-row justify-between items-center">
      {/* Left Section: Contact Info */}
      <div className="lg:w-1/3 space-y-6">
        <h2 className="text-2xl font-semibold mb-6">CONTACT INFO</h2>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m0 0l-4 4m4-4l-4-4"
                />
              </svg>
            </div>
            <div>
              <p>rubinaakter0108@gmail.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M7 21h10a4 4 0 004-4V9a4 4 0 00-4-4H3a4 4 0 00-4 4v8a4 4 0 004 4z"
                />
              </svg>
            </div>
            <div>
              <p>01729773332</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5a7 7 0 00-7 7v5a7 7 0 0014 0v-5a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div>
              <p>Mohammadpur, Dhaka-1207</p>
              <p>Bangladesh</p>
            </div>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex gap-6 mt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/sh.rubina?mibextid=ZbWKwL"
          >
            <FaFacebook className="text-3xl text-blue-700 dark:text-blue-400" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/rubinaakter4321"
          >
            <FaTwitter className="text-3xl text-sky-400 dark:text-sky-200" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rubina02akter"
          >
            <FaGithub className="text-3xl dark:text-gray-100" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="#">
            <FaInstagram className="text-3xl text-red-400 dark:text-red-300" />
          </a>
        </div>
      </div>
      {/* Right Section: Contact Form */}
      <div className="lg:w-2/3 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
        <span className="text-[#5d8ddb]">Contact</span> with us  
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Name *"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email *"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message *"
            rows="4"
            required
            className="w-full p-3 bg-gray-800 text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-[#2B4E86] text-white rounded-md  transition"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;