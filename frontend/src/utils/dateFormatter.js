export const dateFormatter = (inputDate) => {
  const dateObject = new Date(inputDate);

  if (isNaN(dateObject.getTime())) {
    return "Invalid date format";
  }

  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
};
