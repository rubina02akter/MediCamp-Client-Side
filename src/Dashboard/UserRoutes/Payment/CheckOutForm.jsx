import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useJoin from "../../../Hooks/useJoin";

const CheckOutForm = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user} = useAuth();
  const [participants, refetch] = useJoin();
  const navigate = useNavigate();
  

  // Find the single camp price using the camp ID
  const singleCampPrice = participants.find((item) => item._id === id) || null;

  useEffect(() => {
    if (singleCampPrice && singleCampPrice.campFees > 0) {
      axiosSecure
        .post("/create-payment-intent", { campFees: singleCampPrice.campFees })
        .then((res) => {
          console.log("Client Secret:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.error("Error creating payment intent", err));
    }
  }, [axiosSecure, singleCampPrice]);

//   useEffect(() => {
//   if (singleCampPrice) {
//     axiosSecure
//       .get(`/update/${singleCampPrice._id}`, {
//         params: {
//           email: user?.email, // Pass the email as a query parameter
//         },
//       })
//       .then((res) => {
//         setState(res.data);
//       })
//       .catch((err) => console.error("Error fetching update data:", err));
//   }
// }, [axiosSecure, singleCampPrice, user?.email]);

//   console.log(stat)

  const confirmationStatus = ""; // Define confirmation status if needed

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    if (!clientSecret) {
      setError("Payment could not be processed. Please try again later.");
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      setError("Card information is required.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setError(""); // Reset error message

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "user",
          name: user?.displayName || "user",
        },
      },
    });

    if (confirmError) {
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        prevId: singleCampPrice._id,
        email: user.email,
        payment: singleCampPrice.campFees,
        name: singleCampPrice.campName,
        age: singleCampPrice.age,
        location: singleCampPrice.location,
        participant: user?.displayName || "User",
        transactionId: paymentIntent.id,
        date: new Date(),
        cartIds: [id],
        status: "paid",
        confirmationStatus: confirmationStatus,
      };

      try {
        const res = await axiosSecure.post("/payments", payment);
        if (res.data?.paymentResult?.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful!",
            text: "Your transaction has been completed.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
        }
      } catch (err) {
        setError("Failed to save payment details.");
      }
    }
  };

  if (!singleCampPrice || singleCampPrice.campFees <= 0) {
    return <p className="text-red-600">Invalid payment amount.</p>;
  }



  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-block btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-600">{error}</p>}
      {transactionId && (
        <p className="text-green-600">Your transaction ID: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckOutForm;
