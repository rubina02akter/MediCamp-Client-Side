import { useEffect, useState } from "react";

const useFetchParticipants = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://medicamp-server-side.vercel.app/participants")
      .then((res) => res.json())
      .then((data) => {
        setParticipants(data);
        setLoading(false);
      });
  }, []);

  return { participants, setParticipants, loading };
};

export default useFetchParticipants;
