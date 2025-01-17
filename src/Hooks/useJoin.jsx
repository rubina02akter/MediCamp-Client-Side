import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useJoin = () => {
  const axiosPublic = useAxiosPublic();
 

  const {
    data: participants = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["participants"],
    queryFn: async () => {
      const res = await axiosPublic.get("/participants");
      return res.data;
    },
  });

  return [participants, loading, refetch];
};

export default useJoin;