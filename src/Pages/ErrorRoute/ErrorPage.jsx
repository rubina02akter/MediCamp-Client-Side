import Lottie from 'lottie-react';
import lottie from '../../assets/lottie/error.json';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='mt-24'>
      <Lottie animationData={lottie} loop={true} className="mx-auto" style={{ height: 400, width: 400 }} />
      <div className="flex justify-center items-center mt-6">
        <Link to='/' className="btn bg-[#5F58EB] text-white w-48">Go Back Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
