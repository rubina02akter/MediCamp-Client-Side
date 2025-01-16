import useCamp from "../../Hooks/useCamp";
import PopularCamps from "../Home/PopularCamps";
import TopCamp from "./TopCamp";


const AllCamps = () => {
  const [camp] = useCamp();
  return (
    <div>
      
      <PopularCamps></PopularCamps>
    </div>
  );
};

export default AllCamps;