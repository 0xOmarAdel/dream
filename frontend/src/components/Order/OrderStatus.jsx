import { useState } from "react";
import useAxios from "../../hooks/useAxios";

const OrderStatus = ({ status, isAdminOrders, id }) => {
  let style = "";
  let text = "";

  switch (status) {
    case "Pending":
    case 0:
      style =
        "bg-yellow-100 text-yellow-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Pending";
      break;
    case "Confirmed":
    case 1:
      style =
        "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Confirmed";
      break;
    case "Shipping":
    case 2:
      style =
        "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Shipping";
      break;
    case "Delivered":
    case 3:
      style =
        "bg-sky-100 text-sky-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Delivered";
      break;
    case "Canceled":
    case 4:
      style =
        "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Canceled";
      break;
    default:
      style =
        "bg-yellow-100 text-yellow-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded";
      text = "Pending";
      break;
  }

  const statusOptions = ["Pending", "Confirmed", "Shipping", "Delivered"];
  const [stat, setStat] = useState(status);

  const { runAxios: updateOrderStatus, loading: loadingUpdateStatus } =
    useAxios(`/orders/${id}`, "PUT", {
      status: stat,
    });

  return !isAdminOrders ? (
    <span className={style}>{text}</span>
  ) : (
    <>
      <select
        value={stat}
        className="text-lg outline-none"
        onChange={(e) => setStat(e.target.value)}
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary text-white px-4 py-1 ml-4"
        onClick={updateOrderStatus}
      >
        Set
      </button>
    </>
  );
};

export default OrderStatus;
