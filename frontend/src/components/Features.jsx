import { BiCalendar } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiCoffeeBold } from "react-icons/pi";
import { FaCreditCard } from "react-icons/fa";

const Features = () => {
  return (
    <section className="m-4 md:m-8 bg-sky-50">
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center p-4">
          <div className="text-5xl text-sky-500">
            <BiCalendar />
          </div>
          <h3 className="my-3 text-3xl font-semibold text-center">
            Reservation
          </h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="text-5xl text-sky-500">
            <LiaShippingFastSolid />
          </div>
          <h3 className="my-3 text-3xl font-semibold text-center">Delivery</h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="text-5xl text-sky-500">
            <FaCreditCard />
          </div>
          <h3 className="my-3 text-3xl font-semibold text-center">Online Payments</h3>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="text-5xl text-sky-500">
            <PiCoffeeBold />
          </div>
          <h3 className="my-3 text-3xl font-semibold text-center">Desserts</h3>
        </div>
      </div>
    </section>
  );
};
export default Features;
