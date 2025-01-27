import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaMoneyBill, FaSign } from "react-icons/fa";
import { Helmet } from "react-helmet";


const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  return (
    <>
    <Helmet>
    <title>Payment History|MediCamp</title>
    <meta name="description" content="Helmet application"></meta>
    </Helmet>
   
    <div>
      <h2 className="text3-xl">Total Payments: {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>payment</th>
              <th>Transaction Id</th>
              <th>Status</th>
              <th>Confirm Status</th>
           
              
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}.</th>
                <td>${payment.payment}</td>
                <td>{payment.transactionId}</td>
                <td className="text-green-500 flex items-center gap-2">{payment.status}<FaMoneyBill /></td>
                <td className="text-green-500">{payment.confirmationStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default PaymentHistory;