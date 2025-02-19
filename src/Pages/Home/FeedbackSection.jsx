import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules and styles
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const FeedbackSection = () => {
  const [testimonial, setTestimonial] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/feedback").then((res) => setTestimonial(res.data));
  }, [axiosSecure, setTestimonial]);

  return (
    <div className="bg-[#EBF3FE] py-12 px-4 sm:px-6 lg:px-8 border-2 border-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
         -- What Our Users Say --
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Feedback from our valued users about their experiences.
        </p>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10">
          {testimonial.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="mx-24 my-16 flex flex-col items-center">
                {/* User Image */}
                <img 
                  src={test.image} 
                  alt={test.name} 
                  className="w-24 h-24 rounded-full object-cover mb-4" 
                />
                {/* User Name */}
                <p className="text-xl font-semibold text-gray-800 mb-2">{test.name}</p>
                {/* Star Rating */}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={test.rating}
                  readOnly
                />
                {/* Feedback Text */}
                <p className="py-8  bg-[#2B4F86] text-white rounded-xl p-2 m-2 text-center font-medium">
                  "{test.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeedbackSection;
