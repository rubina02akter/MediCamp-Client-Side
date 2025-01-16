import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCamp from "../../Hooks/useCamp";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CampDetails = () => {
  const { campId } = useParams(); 
  const [camp, setCamp] = useState(null);
  const [camps, loading] = useCamp(); 
  const { user } = useAuth();
  const navigate = useNavigate(); 
  const axiosSecure = useAxiosSecure(); 

  const [showModal, setShowModal] = useState(false); 
  const [formData, setFormData] = useState({
    participantName: user?.displayName || "",
    participantEmail: user?.email || "",
    age: "",
    phoneNumber: "",
    gender: "",
    emergencyContact: "",
  });

  useEffect(() => {
    if (camps.length > 0) {
      const selectedCamp = camps.find((camp) => camp._id === campId);
      setCamp(selectedCamp);
    }
  }, [camps, campId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const participantData = {
      campId,
      participantName: formData.participantName,
      participantEmail: formData.participantEmail,
      age: formData.age,
      phoneNumber: formData.phoneNumber,
      gender: formData.gender,
      emergencyContact: formData.emergencyContact,
    };

    try {
      // Save participant data to the database
      const response = await axiosSecure.post("/participants", participantData);

      if (response.status === 200) {
        // Increment the participant count for the camp
        const updatedCamp = { ...camp, participantCount: camp.participantCount + 1 };
        await axiosSecure.patch(`/camp/${campId}`, updatedCamp);

        // Close modal and reset form
        setShowModal(false);
        setFormData({
          participantName: user?.displayName || "",
          participantEmail: user?.email || "",
          age: "",
          phoneNumber: "",
          gender: "",
          emergencyContact: "",
        });
      } else {
        console.error("Failed to register participant.");
      }
    } catch (error) {
      console.error("Error submitting participant data:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!camp) return <div>Camp not found.</div>;

  return (
    <div className="camp-details w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{camp.name}</h2>
      <div className="camp-detail-card">
        <img
          src={camp.image}
          alt={camp.name}
          className="camp-detail-image rounded-lg"
        />
        <div className="camp-detail-info mt-4">
          <p>
            <strong>Camp Fees:</strong> ${camp.campFees}
          </p>
          <p>
            <strong>Date and Time:</strong>{" "}
            {new Date(camp.dateAndTime).toLocaleString()}
          </p>
          <p>
            <strong>Location:</strong> {camp.location}
          </p>
          <p>
            <strong>Healthcare Professional:</strong> {camp.healthcareProfessional}
          </p>
          <p>
            <strong>Participants:</strong> {camp.participantCount}
          </p>
          <p>
            <strong>Description:</strong> {camp.description}
          </p>
          <button
            className="btn btn-primary mt-4"
            onClick={() => setShowModal(true)}
          >
            Join Camp
          </button>
        </div>
      </div>

      {/* Modal for Participant Registration */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="modal modal-open w-full max-w-lg">
            <div className="modal-box p-8">
              <h3 className="text-2xl font-semibold mb-4">Participant Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">Camp Name</label>
                  <input
                    type="text"
                    value={camp.name}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Camp Fees</label>
                  <input
                    type="text"
                    value={`$${camp.campFees}`}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Location</label>
                  <input
                    type="text"
                    value={camp.location}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Healthcare Professional</label>
                  <input
                    type="text"
                    value={camp.healthcareProfessional}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Participant Name</label>
                  <input
                    type="text"
                    value={formData.participantName}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Participant Email</label>
                  <input
                    type="email"
                    value={formData.participantEmail}
                    readOnly
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">Gender</label>
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
                <div className="form-control mb-4">
                  <label className="label">Emergency Contact</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control flex gap-4">
                  <button type="submit" className="btn btn-primary w-full">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-full"
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
