import { useForm } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddCamp = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);

    // Upload image to imgbb
    const imageResponse = await axiosPublic.post(image_hosting_api, imageFile);

    if (imageResponse.data.success) {
      const campItem = {
        name: data.name,
        image: imageResponse.data.data.display_url,
        campFees: parseFloat(data.campFees),
        dateAndTime: data.dateAndTime,
        location: data.location,
        healthcareProfessional: data.healthcareProfessional,
        participantCount: 0, // Default to 0
        description: data.description,
      };

      // Send camp data to the server
      const response = await axiosSecure.post("/camp", campItem);

     
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center my-6">Add A Camp</h2>
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
          />
        </div>

        {/* Date & Time */}
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Date & Time*</span>
          </label>
          <input
            type="datetime-local"
            {...register("dateAndTime", { required: true })}
            className="input input-bordered w-full"
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
          />
        </div>

        {/* Healthcare Professional */}
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Healthcare Professional Name*</span>
          </label>
          <input
            type="text"
            placeholder="Enter healthcare professional name"
            {...register("healthcareProfessional", { required: true })}
            className="input input-bordered w-full"
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
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Upload Image*</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full"
          />
        </div>

        {/* Submit Button */}
        <button className="btn bg-gray-800 text-white w-full my-4">
          Add Camp <FaPlusCircle className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default AddCamp;
