import Banner from "../layout/Banner";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import ReservationCard from "../components/ReservationCards/ReservationCard";

const Reservations = () => {
  const {
    runAxios: fetchReservations,
    data: reservations,
    loading,
  } = useAxios("/reservation");

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  if (loading) return;

  console.log(reservations.data);
  return (
    <div className="flex flex-col gap-10">
      <Banner title="reservations history" />
      <div className="px-20 grid grid-cols-3 gap-10">
        {reservations.data.map((reservation) => (
          <ReservationCard key={reservation._id} reservation={reservation} />
        ))}
      </div>
    </div>
  );
};

export default Reservations;
