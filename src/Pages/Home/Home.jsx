import { Link } from "react-router-dom";
import Slider from "./Slider";
import PopularCamps from "./PopularCamps";
import FeedbackSection from "./FeedbackSection";
import Section from "./Section";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
    <title>Home|MediCamp</title>
    <meta name="description" content="Helmet application"></meta>
    </Helmet>
      <div className="pt-24">
        <Slider></Slider>
        <div>
          <h2 class="text-2xl font-bold text-center mt-8 w-11/12 mx-auto ">
            Explore Our Most Popular Medical Camps
          </h2>
          <p class="md:text-center text-start text-gray-600 mt-2 w-11/12 mx-auto my-4">
            Discover the most sought-after medical camps providing exceptional
            healthcare services. These camps have attracted the highest number
            of participants and are led by renowned professionals to ensure
            top-notch care.
          </p>
          <PopularCamps sortAndSlice={true}></PopularCamps>
        </div>
        <div className=" flex justify-center">
          <button>
            <Link
              to="/available-camps"
              className="btn  bg-[#2B4E86] text-white my-6"
            >
              See All Available Camps
              <FaArrowAltCircleRight />
            </Link>
          </button>
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
