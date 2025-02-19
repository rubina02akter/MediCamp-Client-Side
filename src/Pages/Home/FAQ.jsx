import img from "../../assets/images/health-professional-collection.png"

const FAQ = () => {
  return (
   <div  className="w-10/12 mx-auto text-black pt-6">
     <h2 className="text-4xl mb-12  font-bold text-center">-- Frequently asked questions --</h2>

  <div className="flex flex-col md:flex-row justify-between gap-12">

  <div className="md:w-1/2 w-full mt-8">
  <div>
  <div className="collapse collapse-arrow bg-[#2B4F86] text-white mb-2">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title text-xl font-medium">
      What is MCMS?
    </div>
    <div className="collapse-content">
      <p>
        The Medical Camp Management System (MCMS) is built using the MERN stack. It streamlines 
        the organization and coordination of medical camps, making management efficient.
      </p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-[#2B4F86] text-white mb-2">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">
      How does MCMS help organizers?
    </div>
    <div className="collapse-content">
      <p>
        MCMS enables organizers to schedule camps, manage participants, handle registrations, 
        track payments, and oversee camp operations seamlessly.
      </p>
    </div>
  </div>

  <div className="collapse collapse-arrow bg-[#2B4F86] text-white mb-2">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title text-xl font-medium">
      How does MCMS benefit participants?
    </div>
    <div className="collapse-content">
      <p>
        Participants can register for medical camps, access event details, receive updates, and 
        track their application and payment statuses conveniently.
      </p>
    </div>
  </div>
</div>

    </div>

    <div className="md:w-1/2 w-full">
      <img src={img} alt=""  className="w-96 rounded-lg"/>
    </div>

  </div>
   </div>
  );
};

export default FAQ;
