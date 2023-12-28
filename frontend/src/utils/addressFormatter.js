export const addressFormatter = (addressObject) => {
  const { apartment, street, city, country, zipCode } = addressObject;

  const formattedAddress = [apartment, street, city, country, zipCode].join(
    ", "
  );

  return formattedAddress;
};
