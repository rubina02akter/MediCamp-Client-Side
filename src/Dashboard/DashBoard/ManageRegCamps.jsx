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

// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
// import useStatus from "../../Hooks/useStatus";
// import { IoCheckmarkCircle } from "react-icons/io5";

// const ManageRegCamps = () => {
//   const [participantData, setParticipantData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();
//   const [pay] = useStatus([]);
//   console.log(pay); // To check payment data
//   const axiosSecure = useAxiosSecure();

//   useEffect(() => {
//     const fetchParticipantData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:4000/payments`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setParticipantData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchParticipantData();
//   }, [user?.email]);

//   if (loading) {
//     return <div className="text-center py-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-4 text-red-500">Error: {error}</div>;
//   }

//   if (!participantData || participantData.length === 0) {
//     return (
//       <div className="text-center py-4 text-gray-500">
//         No participant found with this email.
//       </div>
//     );
//   }

//   const handleDeleteUser = (id) => {
//     console.log('Deleting payment with ID:', id); // Log the ID being passed

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure
//           .delete(`/participants/${id}`)
//           .then((res) => {
//             if (res.data.deletedCount > 0) {
//               setParticipantData((prevData) =>
//                 prevData.filter((camp) => camp._id !== id)
//               ); // Remove the deleted camp from the UI
//               Swal.fire({
//                 title: "Deleted!",
//                 text: "Your camp registration has been deleted.",
//                 icon: "success",
//               });
//             }
//           })
//           .catch((error) => {
//             console.error('Error deleting camp:', error); // Log any error
//             Swal.fire({
//               title: "Error!",
//               text: "There was an issue deleting the camp.",
//               icon: "error",
//             });
//           });
//       }
//     });
//   };

//   const updateStatus = 'Confirmed';
//   const data = {
//     confirmationStatus: updateStatus
//   }

//   const handleConfirm =(id)=>{

//    axiosSecure.patch(`/payments/${id}`, data)
//    .then(res=>console.log(res))

//   }

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <h2 className="text-3xl font-semibold text-center mb-6">
//         Registered Camps
//       </h2>
//       <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Camp Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Camp Fees
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Participant Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Payment Status
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Payment Confirmation Status
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-medium">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {participantData.map((camp, index) => {
//               // Find the payment status for the current camp
//               const payment = pay.find((p) => p.cartIds.includes(camp._id));
//               const paymentStatus = payment ? payment.status : "Unpaid";
//               const confirmationStatus =
//                 payment?.confirmationStatus === "Confirmed"
//                   ? "Confirmed"
//                   : "Pending";

//               return (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     {camp.campName}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     ${camp.campFees}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     {camp.name}
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     <span
//                       className={`px-2 py-1 rounded-full text-sm font-semibold ${
//                         paymentStatus === "Paid"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-red-100 text-red-600"
//                       }`}
//                     >
//                       {paymentStatus}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     {/* <span
//                       className={`px-2 py-1 rounded-full text-sm font-semibold ${
//                         confirmationStatus === "Confirmed"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-yellow-100 text-yellow-600"
//                       }`}
//                     >
//                       {confirmationStatus}
//                     </span> */}
//                     {confirmationStatus === "Confirmed" ? <span>Confirmed</span> :

//                   <button
//                   onClick={()=>handleConfirm(camp._id)}
//                   className="btn">{confirmationStatus}</button>
//                   }
//                     <div>

//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-700">
//                     <div className="grid gap-2">
//                       {paymentStatus === "Unpaid" ? (
//                         <>

//                         <button
//                         onClick={() => handleDeleteUser(camp._id)} // Corrected to pass camp._id
//                         className={`ml-3 ${
//                           paymentStatus === "Paid"
//                             ? "bg-gray-400"
//                             : "bg-red-600"
//                         } text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500`}
//                         disabled={paymentStatus === "Paid"}
//                       >
//                         x
//                       </button>

//                         </>

//                       ) : (
//                         <>
//                         <button
//                           className=" text-green-700 px-4 py-2 rounded-lg text-center text-lg font-semibold"

//                         >
//                          <IoCheckmarkCircle />
//                         </button>

//                         </>
//                       )}

//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageRegCamps;
