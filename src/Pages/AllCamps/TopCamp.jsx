import useCamp from "../../Hooks/useCamp";
import CampCard from "./CampCard";

const TopCamp = () => {
const [camp] = useCamp();
console.log(camp);
  return (
    <div className="py-12 w-11/12 mx-auto">
       <div className="grid md:grid-cols-3 gap-10">
        {
         camp.map(cam=><CampCard key={cam._id} cam={cam}></CampCard>)
        }
      </div>
    </div>
  );
};

export default TopCamp;