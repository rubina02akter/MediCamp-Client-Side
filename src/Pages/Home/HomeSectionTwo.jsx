import { motion } from "framer-motion";
// import img1 from '../../assets/images/doctor-nurses-special-equipment.jpg';
// import img2 from '../../assets/marquee/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book (1).jpg';
// import img3 from '../../assets/images/paramedics-examining-injured-boy.jpg';
// import img4 from '../../assets/images/successful-medical-camp.jpg'; 
import doctor1 from '../../assets/marquee/doctors-day-handsome-brunette-cute-guy-medical-gown-with-crossed-hands.jpg'; 
import doctor2 from '../../assets/marquee/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic.jpg'; 
import doctor3 from '../../assets/marquee/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg'; 

const HomeSectionTwo = () => {
  const doctors = [
    { id: 1, name: "Dr. Ayesha Rahman", specialty: "Cardiologist", image: doctor1 },
    { id: 2, name: "Dr. Farhan Ahmed", specialty: "Pediatrician", image: doctor2 },
    { id: 3, name: "Dr. Nusrat Jahan", specialty: "General Physician", image: doctor3 },
  ];

  return (
    <div className="pb-12 bg-[#EBF3FE]">
      <div className="max-w-6xl mx-auto px-6 grid gap-6">
        
        {/* Existing Sections (Why Choose, How It Works, Join as Volunteer, Our Impact) */}
        {/* ... */}

        {/* New Section: Our Trusted Specialists */}
        <motion.div
          className="bg-white shadow-lg p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">-- Meet Our Trusted Specialists --</h2>
          <p className="text-gray-600 mb-8">
            Our dedicated team of professionals ensures high-quality medical care at every camp.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                className="bg-[#EBF3FE] p-6 rounded-xl shadow-md w-64 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default HomeSectionTwo;
