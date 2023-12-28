import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { addressFormatter } from "../../utils/addressFormatter";

const CartFormValues = ({ formikValues }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row items-center gap-2">
        <FaMapMarkerAlt className="text-primary" />
        <p className="text-gray-600 font-medium">
          {addressFormatter(formikValues)}
        </p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaPhoneAlt className="text-primary" />
        <p className="text-gray-600 font-medium">{formikValues.phone}</p>
      </div>
    </div>
  );
};

export default CartFormValues;
