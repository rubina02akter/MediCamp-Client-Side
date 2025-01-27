import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet";

//TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <>
    <Helmet>
    <title>Payment|MediCamp</title>
    <meta name="description" content="Helmet application"></meta>
    </Helmet>
  
    <div className="w-8/12 mx-auto mt-32">
     
       <div>
        <Elements stripe={stripePromise}>
         <CheckOutForm></CheckOutForm>
        </Elements>
       </div>
    </div>
    </>
  );
};

export default Payment;