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
    console.log(data);

    // Image upload to imgbb and then get the URL
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // Create camp item with the image URL
      const campItem = {
        name: data.name,
        image: res.data.data.display_url,
        campFees: parseFloat(data.campFees),
        dateAndTime: data.dateAndTime,
        location: data.location,
        healthcareProfessional: data.healthcareProfessional,
        participantCount: parseInt(data.participantCount, 10),
        description: data.description,
      };

      // Send camp data to the server
      const response = await axiosSecure.post("/camp", campItem);
      console.log(response.data);

      if (response.data.insertedId) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been added to the camps.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

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
              <span className="label-text">Upload Image*</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full my-4">
            Add Camp <FaPlusCircle className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCamp;
