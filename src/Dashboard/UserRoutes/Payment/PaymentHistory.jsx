import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1); // Current page state
  const pageSize = 10; // Items per page

  // Fetch payment history with pagination
  const { data, isLoading } = useQuery({
    queryKey: ["payments", user?.email, page],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/${user?.email}?page=${page}&limit=${pageSize}`
      );
      return res.data;
    },
    keepPreviousData: true, // Keeps the previous data while fetching new data
  });

  const payments = data?.results || [];
  const totalPayments = data?.total || 0;
  const totalPages = Math.ceil(totalPayments / pageSize);

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold my-4">
        Total Payments: {totalPayments}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead>
            <tr>
              <th>#</th>
              <th>Payment</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{(page - 1) * pageSize + index + 1}</th>
                  <td>${payment.payment}</td>
                  <td>{payment.transactionId}</td>
                  <td>
                    <span
                      className={`btn text-white ${
                        payment.status === "Completed"
                          ? "bg-green-600"
                          : "bg-red-600"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500">
                  No payments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 my-4">
        <button
          className="btn btn-outline"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="btn btn-outline"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;