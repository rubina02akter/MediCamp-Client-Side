import { Link } from "react-router-dom";
import Slider from "./Slider";
import TopCamp from "./TopCamp";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopCamp></TopCamp>

      <Link to='/available-camps' className="btn btn-link flex justify-center">See All Available Camps</Link>
    </div>
  );
};

export default Home;