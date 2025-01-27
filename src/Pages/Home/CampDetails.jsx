import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useCamp from "../../Hooks/useCamp";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useJoin from "../../Hooks/useJoin";

const CampDetails = () => {
  const { campId } = useParams();
  const [camps, setCamps] = useState(null);
  const [camp, loading] = useCamp();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useJoin();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    participantName: user?.displayName || "User",
    participantEmail: user?.email || "user@mail.com",
    age: "",
    phoneNumber: "",
    gender: "",
    emergencyContact: "",
  });

  useEffect(() => {
    if (camp && camp.length > 0) {
      const selectedCamp = camp.find((camp) => camp._id.toString() === campId);
      setCamps(selectedCamp);
    }
  }, [camp, campId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { age, phoneNumber, gender, emergencyContact } = formData;

    const participantData = {
      name: formData.participantName,
      email: formData.participantEmail,
      age,
      phoneNumber,
      gender,
      emergencyContact,
      campName: camps.name,
      campFees: camps.campFees || camps.price,
      location: camps.location,
      status:'pending',
    };

    try {
      await axiosSecure.post("/participants", participantData);
      Swal.fire({
        title: "Success!",
        text: "Added successfully",
        icon: "success",
        confirmButtonText: "Ok",
      });
      refetch();
      e.target.reset();
      navigate("/dashboard/registered-camps");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!camps) return <div>Camp not found.</div>;

  return (
    <div className="camp-details w-11/12 mx-auto py-24">
     
      <div className="camp-detail-card flex flex-col lg:flex-row gap-6">
        {/* Left: Image */}
        <div className="lg:w-1/2">
          <img
            src={camps.image}
            alt={camps.name}
            className="rounded-lg w-full h-96 object-cover shadow-md"
          />
        </div>

        {/* Right: Description */}
        <div className="lg:w-1/2 flex flex-col justify-center mt-10">
        <p className="text-lg text-gray-700 mb-2">
        <strong>Camp Name: {camps.name}</strong>
        </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Camp Fees:</strong> ${camps.campFees || camps.price}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Date and Time:</strong>{" "}
            {new Date(camps.dateAndTime).toLocaleString()}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Location:</strong> {camps.location}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Healthcare Professional:</strong>{" "}
            {camps.healthcareProfessional}
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Participants:</strong> {camps.participantCount || 0}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Description:</strong> {camps.description}
          </p>
          <button
            className="btn btn-block text-white bg-[#2B4D86] hover:bg-blue-800 mt-4"
            onClick={() => setShowModal(true)}
          >
            Join Camp
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal modal-open w-11/12 mx-auto max-w-2xl bg-white rounded-lg shadow-lg">
            <div className="modal-box p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Participant Registration
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Camp Name, Fees */}
                <div className="md:flex gap-4">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Camp Name</span>
                    </label>
                    <input
                      type="text"
                      value={camps.name}
                      readOnly
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Camp Fees</span>
                    </label>
                    <input
                      type="text"
                      value={`$${camps.campFees || camps.price}`}
                      readOnly
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Participant Details */}
                <div className="md:flex gap-4">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Participant Name</span>
                    </label>
                    <input
                      type="text"
                      value={formData.participantName}
                      readOnly
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Participant Email</span>
                    </label>
                    <input
                      type="email"
                      value={formData.participantEmail}
                      readOnly
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                {/* Participant's Age, Phone Number, Gender, Emergency Contact */}
                <div className="md:flex gap-4">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Age</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>

                <div className="md:flex gap-4">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Gender</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Emergency Contact</span>
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex flex-col gap-4">
                  <button type="submit" className="btn btn-block text-white bg-[#2B4D86] hover:bg-blue-600">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-block text-white bg-rose-700 hover:bg-rose-500"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampDetails;
