import { FaMapMarkerAlt } from "react-icons/fa";
import { addressFormatter } from "../../utils/addressFormatter";

const OrderSummaryAddress = ({ formikValues }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <FaMapMarkerAlt className="text-primary" />
      <p className="text-gray-600 font-medium">
        {addressFormatter(formikValues)}
      </p>
    </div>
  );
};

export default OrderSummaryAddress;
