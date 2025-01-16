// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCamp = () => {
  const axiosPublic = useAxiosPublic();
 

  const {
    data: camp = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["camp"],
    queryFn: async () => {
      const res = await axiosPublic.get("/camp");
      return res.data;
    },
  });

  return [camp, loading, refetch];
};

export default useCamp;
