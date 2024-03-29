import ReservationForm from "./ReservationForm";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userAuthSlice";
import reservations from "../../assets/reservations.jpg";

const ReservationsSystem = () => {
  const user = useSelector(selectUser);

  return (
    <section
      className="relative py-24 bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${reservations})`,
      }}
      id="reservation"
    >
      <div className="relative z-20 max-w-4xl h-full mx-auto flex flex-col justify-center items-center text-gray-200">
        <h3 className="text-4xl font-medium capitalize text-center">
          reserve your table
        </h3>
        <ReservationForm />
        {(!user || user?.role !== "user") && (
          <p className="mt-6 text-lg text-red-500">
            You need to log in first to make a reservation
          </p>
        )}
      </div>
      <div className="absolute inset-0 z-10 bg-black bg-opacity-75"></div>
    </section>
  );
};

export default ReservationsSystem;
