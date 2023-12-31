import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import ReservationCard from "../../components/ReservationCards/ReservationCard";

const AdminReservations = () => {
  const {
    runAxios: fetchReservations,
    data: reservations,
    loading,
  } = useAxios("/reservation");

  console.log(reservations);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  return (
    <div className="h-screen overflow-y-auto">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {reservations.data.map((reservation) => (
            <ReservationCard key={reservation._id} reservation={reservation} />
          ))}
        </div>
      )}
    </div>
  );
};
export default AdminReservations;
