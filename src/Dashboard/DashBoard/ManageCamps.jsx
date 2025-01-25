import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";

const ManageItems = () => {
  const [camps, setCamps] = useState([]); // Initialize camps state
  const axiosSecure = useAxiosSecure();

  // Fetch data from the server
  const fetchCamps = async () => {
    try {
      const res = await axiosSecure.get("/camp"); // API endpoint for fetching camp data
      setCamps(res.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching camps:", error);
    }
  };

  // Call fetchCamps on component mount
  useEffect(() => {
    fetchCamps();
  }, []);

  // Handle delete item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/camp/${item._id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${item.name} has been deleted`,
              showConfirmButton: false,
              timer: 1500,
            });
            // Remove deleted item from the camps list
            setCamps((prevCamps) => prevCamps.filter((camp) => camp._id !== item._id));
          }
        } catch (error) {
          console.error("Error deleting item:", error);
          Swal.fire("Error!", "Failed to delete the camp.", "error");
        }
      }
    });
  };

  return (
    <div className="my-12">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Thumbnail</th>
              <th>Camp Name</th>
              <th>Camp Fees</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {camps.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Camp Thumbnail" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-left">${item.campFees}</td>
                <td>
                  <Link to={`/dashboard/update-camp/${item._id}`}>
                    <button className="btn btn-ghost btn-lg bg-[#2B4D86]">
                      <FaEdit className="text-white" />
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
