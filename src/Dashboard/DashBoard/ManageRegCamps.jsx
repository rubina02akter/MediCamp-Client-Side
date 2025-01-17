import Swal from "sweetalert2";
import useFetchParticipants from "../../Hooks/useFetchParticipants";
import useAuth from "../../Hooks/useAuth";

const ManageRegisteredCamps = () => {
  const { participants, setParticipants, loading } = useFetchParticipants(); // Use the custom hook to fetch data
  const { user } = useAuth();

  // Confirm Payment Handler
  const handleConfirm = async (id) => {
    try {
      const res = await fetch(`http://localhost:4000/participants/${id}/confirm`, { method: "PATCH" });
      if (res.ok) {
        const updatedParticipants = participants.map((p) =>
          p._id === id ? { ...p, confirmationStatus: "Confirmed" } : p
        );
        setParticipants(updatedParticipants); // Update the participants state
        Swal.fire("Success", "Payment confirmed successfully!", "success");
      } else {
        throw new Error("Failed to confirm payment");
      }
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  // Cancel Registration Handler
  const handleCancel = async (id) => {
    const participant = participants.find((p) => p._id === id);

    if (participant.paymentStatus === "Paid" && participant.confirmationStatus === "Confirmed") {
      Swal.fire("Error", "Cannot cancel a confirmed paid registration.", "error");
      return;
    }

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action will remove the participant's registration.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:4000/participants/${id}`, { method: "DELETE" });
        if (res.ok) {
          const updatedParticipants = participants.filter((p) => p._id !== id);
          setParticipants(updatedParticipants);
          Swal.fire("Cancelled", "Registration has been removed.", "success");
        } else {
          throw new Error("Failed to cancel registration");
        }
      } catch (error) {
        Swal.fire("Error", error.message, "error");
      }
    }
  };

  // Show loading state if data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Camp Name</th>
            <th className="border border-gray-300 px-4 py-2">Fees</th>
            <th className="border border-gray-300 px-4 py-2">Participant Name</th>
            <th className="border border-gray-300 px-4 py-2">Payment Status</th>
            <th className="border border-gray-300 px-4 py-2">Confirmation Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((p) => (
            <tr key={p._id}>
              <td className="border border-gray-300 px-4 py-2">{p.campName}</td>
              <td className="border border-gray-300 px-4 py-2">{p.campFees}</td>
              <td className="border border-gray-300 px-4 py-2">{p.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {p.paymentStatus === "Paid" ? "Paid" : "Unpaid"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {p.confirmationStatus === "Pending" ? (
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                    onClick={() => handleConfirm(p._id)}
                  >
                    Pending
                  </button>
                ) : (
                  "Confirmed"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className={`px-4 py-2 rounded ${
                    p.paymentStatus === "Paid" && p.confirmationStatus === "Confirmed"
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                  disabled={p.paymentStatus === "Paid" && p.confirmationStatus === "Confirmed"}
                  onClick={() => handleCancel(p._id)}
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

export default ManageRegisteredCamps;
