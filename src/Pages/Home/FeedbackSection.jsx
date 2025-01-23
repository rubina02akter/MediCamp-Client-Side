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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          What Our Users Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Feedback from our valued users about their experiences.
        </p>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-10">
          {testimonial.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="mx-24 my-16 flex flex-col items-center">
                {/* Star Rating */}
                <Rating
                  style={{ maxWidth: 180 }}
                  value={test.rating}
                  readOnly
                />
                {/* Feedback Text */}
                <p className="py-8 text-gray-700 text-center font-medium">
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
