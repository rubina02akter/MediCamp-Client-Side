// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useCamp = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: camp = [], isPending: loading, refetch} = useQuery({
        queryKey: ['camp'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/camp');
            return res.data;
        }
    })


    return [camp, loading, refetch]
}

export default useCamp;