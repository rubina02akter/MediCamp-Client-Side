import { motion } from "framer-motion";
import img1 from '../../assets/images/doctor-nurses-special-equipment.jpg';
import img2 from '../../assets/marquee/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book (1).jpg';
import img3 from '../../assets/images/paramedics-examining-injured-boy.jpg';
import img4 from '../../assets/images/different-people-doing-volunteer-work.jpg'; // New Image for Impact Section

const HomeSections = () => {
  return (
    <div className="py-16 bg-[#EBF3FE]">
      <div className="max-w-6xl mx-auto px-6 grid gap-6">
        
        {/* Section 1: Why Choose Our Medical Camps? */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-white shadow-lg p-8 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Our Medical Camps?</h2>
            <p className="text-gray-600 mt-3">
              Our system connects communities with expert healthcare professionals, ensuring accessible and 
              efficient medical assistance.
            </p>
          </div>
          <img 
            src={img1}
            alt="Doctors Team"
            className="w-72 h-48 object-cover rounded-lg shadow-md mt-6 md:mt-0 md:ml-6"
          />
        </motion.div>

        {/* Section 2: How It Works? */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-white shadow-lg p-8 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={img2}
            alt="Patient Registration"
            className="w-72 h-48 object-cover rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">How It Works?</h2>
            <p className="text-gray-600 mt-3">
              - Patients register easily through our online system.  
              - Doctors and volunteers get notified for assistance.  
              - Real-time updates ensure smooth operations.  
            </p>
          </div>
        </motion.div>

        {/* Section 3: Join as a Volunteer */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-white shadow-lg p-8 rounded-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Join as a Volunteer</h2>
            <p className="text-gray-600 mt-3">
              Be a part of our mission! Support medical camps by volunteering and making a difference in 
              underserved communities.
            </p>
          </div>
          <img 
            src={img3}
            alt="Volunteer Team"
            className="w-72 h-48 object-cover rounded-lg shadow-md mt-6 md:mt-0 md:ml-6"
          />
        </motion.div>

        {/* New Section 4: Our Impact */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-white shadow-lg p-8 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={img4}
            alt="Medical Camp Success"
            className="w-72 h-48 object-cover rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">Our Impact</h2>
            <p className="text-gray-600 mt-3">
              Over the past years, our medical camps have provided healthcare services to thousands of patients.  
              We continue to create a positive impact in underserved areas, ensuring people receive the care they deserve.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HomeSections;
