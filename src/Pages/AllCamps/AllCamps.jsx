import useCamp from "../../Hooks/useCamp";
import TopCamp from "../Home/TopCamp";


const AllCamps = () => {
  const [camp] = useCamp();
  return (
    <div>
      <TopCamp></TopCamp>
    </div>
  );
};

export default AllCamps;