const ReservationStatus = ({ status }) => {
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
    case "Declined":
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

  return <span className={style}>{text}</span>;
};

export default ReservationStatus;
