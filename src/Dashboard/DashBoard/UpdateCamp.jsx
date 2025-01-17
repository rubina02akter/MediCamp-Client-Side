import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {
  const { id } = useParams(); // Get camp ID from route params
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampData = async () => {
      try {
        const res = await axiosSecure.get(`/camp/${id}`);
        const camp = res.data;
        // Pre-fill form fields with camp data
        setValue("name", camp.name);
        setValue("campFees", camp.campFees);
        setValue("dateAndTime", camp.dateAndTime);
        setValue("location", camp.location);
        setValue("healthcareProfessional", camp.healthcareProfessional);
        setValue("participantCount", camp.participantCount);
        setValue("description", camp.description);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching camp data:", error);
      }
    };

    fetchCampData();
  }, [id, setValue, axiosSecure]);

  const onSubmit = async (data) => {
    console.log(data);

    let imageUrl = null;

    // Check if a new image is uploaded
    if (data.image.length > 0) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      }
    }

    // Prepare updated camp data
    const updatedCamp = {
      name: data.name,
      image: imageUrl || undefined, // Only update image if a new one is uploaded
      campFees: parseFloat(data.campFees),
      dateAndTime: data.dateAndTime,
      location: data.location,
      healthcareProfessional: data.healthcareProfessional,
      participantCount: parseInt(data.participantCount, 10),
      description: data.description,
    };

    try {
      const response = await axiosSecure.patch(`/camp/${id}`, updatedCamp);
      console.log(response.data);

      // if (response.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/manageCamp"); 
      // }
    } catch (error) {
      console.error("Error updating camp:", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Camp Name */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Camp Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter camp name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Camp Fees */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Camp Fees*</span>
            </label>
            <input
              type="number"
              placeholder="Enter camp fees"
              {...register("campFees", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Date and Time*</span>
            </label>
            <input
              type="datetime-local"
              {...register("dateAndTime", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Location*</span>
            </label>
            <input
              type="text"
              placeholder="Enter location"
              {...register("location", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Healthcare Professional */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Healthcare Professional*</span>
            </label>
            <input
              type="text"
              placeholder="Enter healthcare professional's name"
              {...register("healthcareProfessional", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Participant Count */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Participant Count*</span>
            </label>
            <input
              type="number"
              placeholder="Enter maximum participant count"
              {...register("participantCount", { required: true })}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <textarea
              placeholder="Write a brief description of the camp"
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Upload New Image (optional)</span>
            </label>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full"
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full my-4">
            Update Camp <FaSave className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCamp;