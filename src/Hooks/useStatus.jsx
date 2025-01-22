import { useEffect, useState } from "react";

const useStatus = () => {
  const [pay, setPay] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://medicamp-server-side.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        setPay(data);
        setLoading(false);
      });
  }, []);


  return [pay, loading] ;

}

export default useStatus;