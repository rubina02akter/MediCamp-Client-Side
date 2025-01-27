import { Link } from "react-router-dom";
import Slider from "./Slider";
import PopularCamps from "./PopularCamps";
import FeedbackSection from "./FeedbackSection";
import Section from "./Section";
import { FaArrowAltCircleRight } from "react-icons/fa";


const Home = () => {
  return (
    <>
    <div className="pt-24">
      <Slider></Slider>
     <div>
     <PopularCamps sortAndSlice={true}></PopularCamps>
     </div>
      <div className=" flex justify-center">
        <button><Link to='/available-camps' className="btn  bg-[#2B4E86] text-white my-6">See All Available Camps<FaArrowAltCircleRight /></Link></button>
      </div>
    </div>

    <div>
      <FeedbackSection></FeedbackSection>
    </div>

    <div>
      <Section></Section>
    </div> 
   </>
  );
};

export default Home;