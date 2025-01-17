import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="w-8/12 mx-auto mt-32">
     
       <div>
        <Elements stripe={stripePromise}>
         <CheckOutForm></CheckOutForm>
        </Elements>
       </div>
    </div>
  );
};

export default Payment;