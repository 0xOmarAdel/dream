import Card from "../../ui/Card";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope, SlCalender } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { LuClock4 } from "react-icons/lu";
import { timeFormatter } from "../../utils/timeFormatter";
import Divider from "../../ui/Divider";
import { dateFormatter } from "../../utils/dateFormatter";

const ReservationCard = ({ reservation }) => {
  return (
    <Card classes="flex flex-col gap-3 text-gray-500 font-medium">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl text-gray-600 font-medium uppercase">
            reservation id
          </h3>
          <span className="text-sm">#{reservation._id}</span>
        </div>
        <span className="">{reservation.status}</span>
      </div>
      <Divider />
      <p className="flex flex-row items-center gap-2">
        <AiOutlineUser className="text-lg text-primary" /> {reservation.name}
      </p>
      <p className="flex flex-row items-center gap-2">
        <SlEnvolope className="text-primary" /> {reservation.email}
      </p>
      <p className="flex flex-row items-center gap-2">
        <BsTelephone className="text-lg text-primary" /> {reservation.phone}
      </p>
      <div className="flex flex-row justify-between">
        <p className="flex flex-row items-center gap-2">
          <SlCalender className="text-primary" />
          {dateFormatter(reservation.resDate)}
        </p>
        <p className="flex flex-row items-center gap-2">
          <LuClock4 className="text-lg text-primary" />
          {timeFormatter(reservation.resTime)}
        </p>
      </div>
    </Card>
  );
};

export default ReservationCard;
