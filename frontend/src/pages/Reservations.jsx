import Banner from "../layout/Banner";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import ReservationCard from "../components/ReservationCards/ReservationCard";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

const Reservations = () => {
  const {
    runAxios: fetchReservations,
    data: reservations,
    loading,
    error,
  } = useAxios("/reservation");

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  if (loading) return <Loading />;

  return (
    <div className={`flex flex-col ${error ? "" : "gap-14"}`}>
      <Banner title="reservations history" />
      {error ? (
        <Error />
      ) : (
        <div className="px-20 pb-14 grid grid-cols-3 gap-10">
          {reservations.data.map((reservation) => (
            <ReservationCard key={reservation._id} reservation={reservation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reservations;
