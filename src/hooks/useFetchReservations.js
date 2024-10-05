import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../firebase/config";
import { formatDate } from "../utils/utilFunctions";

const useFetchReservations = (initialState) => {
  const [reservations, setReservations] = useState(initialState);

  useEffect(() => {
    const fetchReservations = async () => {
      const reservationsRef = ref(database, "reservations");
      try {
        const snapshot = await get(reservationsRef);
        const reservationsData = snapshot.val();
        const reservationsList = Object.keys(reservationsData).map((key) => ({
          id: key,
          ...reservationsData[key],
          createdAt: formatDate(reservationsData[key].createdAt),
        }));
        setReservations(reservationsList);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchReservations();
  }, []);

  return reservations;
};

export default useFetchReservations;
