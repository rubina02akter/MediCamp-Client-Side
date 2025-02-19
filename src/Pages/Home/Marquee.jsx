// Import images for marquee
import marqueeImg1 from "../../assets/marquee/beautiful-young-female-doctor-looking-camera-office.jpg";
import marqueeImg2 from "../../assets/marquee/doctors-day-curly-brunette-cute-guy-lab-coat-pointing-himself-smiling.jpg";
import marqueeImg3 from "../../assets/marquee/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book (1).jpg";
import marqueeImg4 from "../../assets/marquee/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book (1).jpg";
import marqueeImg5 from "../../assets/marquee/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic.jpg";
import marqueeImg6 from "../../assets/marquee/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg";
import marqueeImg7 from "../../assets/marquee/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg";
import marqueeImg8 from "../../assets/marquee/portrait-candid-male-doctor.jpg";
import marqueeImg9 from "../../assets/marquee/beautiful-young-female-doctor-looking-camera-office.jpg";
import marqueeImg10 from "../../assets/marquee/doctors-day-curly-brunette-cute-guy-lab-coat-pointing-himself-smiling.jpg";
import MarqueeFast from "react-fast-marquee";

const Marquee = () => {
  const marqueeImages = [
    marqueeImg1,
    marqueeImg2,
    marqueeImg3,
    marqueeImg4,
    marqueeImg5,
    marqueeImg6,
    marqueeImg7,
    marqueeImg8,
    marqueeImg9,
    marqueeImg10,
  ];

  return (
    <div className="py-8">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
         -- Meet Our Respected Doctors --
        </h2>
        <p className="text-gray-600 mt-2">
          Dedicated professionals committed to providing the best medical care
          at our camps.
        </p>
      </div>

      {/* Marquee Section */}
      <div className="mb-8">
        <MarqueeFast pauseOnHover={true} speed={50}>
          {marqueeImages.map((image, index) => (
            <div key={index} className="mx-4">
              <img
                src={image}
                alt={`Doctor ${index + 1}`}
                className="w-32 h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </MarqueeFast>
      </div>
    </div>
  );
};

export default Marquee;
