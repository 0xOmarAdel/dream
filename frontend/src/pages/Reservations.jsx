import Banner from "../layout/Banner";
import { useEffect } from "react";
import useAxios from "../hooks/useAxios";
import ReservationCard from "../components/ReservationCards/ReservationCard";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import Section from "../ui/Section";

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
    <div className="flex flex-col">
      <Banner
        title="reservations history"
        breadcrumbs={[
          { text: "profile", path: "/profile" },
          { text: "reservations" },
        ]}
      />
      {error ? (
        <Error />
      ) : (
        <Section classes="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {reservations.data.map((reservation) => (
            <ReservationCard key={reservation._id} reservation={reservation} />
          ))}
        </Section>
      )}
    </div>
  );
};

export default Reservations;
