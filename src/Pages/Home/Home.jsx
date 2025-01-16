import { Link } from "react-router-dom";
import Slider from "./Slider";
import TopCamp from "./TopCamp";
import PopularCamps from "./PopularCamps";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
     <div>
     <PopularCamps></PopularCamps>
     </div>

      <Link to='/available-camps' className="btn btn-link flex justify-center">See All Available Camps</Link>
    </div>
  );
};

export default Home;