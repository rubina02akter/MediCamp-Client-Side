import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageRegCamps = () => {
  const [payData, setPayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/payments`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPayData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateStatus = "Confirmed";
  const data = {
    confirmationStatus: updateStatus,
  };

  const handleConfirm = (id) => {
    axiosSecure.patch(`/payments/${id}`, data).then((res) => console.log(res));
    
  };


  // Handle delete with confirmation
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will permanently delete the registration.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/payments/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Registration has been removed.", "success");
            // Update the local state to remove the deleted item
            setPayData((prevData) =>
              prevData.filter((camp) => camp._id !== id)
            );
          } else {
            Swal.fire("Error!", "Failed to delete the registration.", "error");
          }
        });
      }
    });
  };

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Camp Name</th>
            <th className="border border-gray-300 px-4 py-2">Camp Fees</th>
            <th className="border border-gray-300 px-4 py-2">
              Participant Name
            </th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Payment Status</th>
            <th className="border border-gray-300 px-4 py-2">
              Confirmation Status
            </th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {payData.map((camp) => (
            <tr key={camp._id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{camp.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                ${camp.payment}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {camp.participant}
              </td>
              <td className="border border-gray-300 px-4 py-2">{camp.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {camp.status === "paid" ? (
                  <span className="text-green-600 font-bold">Paid</span>
                ) : (
                  <span className="text-red-600 font-bold">Unpaid</span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {camp.confirmationStatus === "Confirmed" ? (
                  <span className="text-green-600 font-bold">Confirmed</span>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => handleConfirm(camp._id)}
                  >
                    Pending
                  </button>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">{camp.age}</td>
              <td className="border border-gray-300 px-4 py-2">
                {camp.location}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className={`btn ${
                    camp.status === "paid" &&
                    camp.confirmationStatus === "Confirmed"
                      ? "btn-disabled bg-gray-400"
                      : "btn-danger"
                  }`}
                  disabled={
                    camp.status === "paid" &&
                    camp.confirmationStatus === "Confirmed"
                  }
                  onClick={() => handleDeleteUser(camp._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRegCamps;

