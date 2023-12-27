export const priceFormatter = (number) => {
  const formattedNumber = Number.isInteger(number)
    ? number.toFixed(2)
    : parseFloat(number).toFixed(2);

  return `$${formattedNumber}`;
};
