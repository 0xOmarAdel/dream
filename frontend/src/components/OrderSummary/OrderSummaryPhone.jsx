import { FaPhoneAlt } from "react-icons/fa";

const OrderSummaryPhone = ({phone}) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <FaPhoneAlt className="text-primary" />
      <p className="text-gray-600 font-medium">{phone}</p>
    </div>
  );
};

export default OrderSummaryPhone;
