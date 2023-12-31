export const timeFormatter = (inputTime) => {
  const [hours, minutes] = inputTime.split(":");
  const parsedHours = parseInt(hours, 10);

  if (isNaN(parsedHours) || parsedHours < 0 || parsedHours > 23) {
    return "Invalid time format";
  }

  const formattedHours = parsedHours % 12 || 12;
  const period = parsedHours < 12 ? "AM" : "PM";

  return `${formattedHours}:${minutes || "00"} ${period}`;
};
