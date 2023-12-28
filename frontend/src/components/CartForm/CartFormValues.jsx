import { addressFormatter } from "../../utils/addressFormatter";

const CartFormValues = ({ formikValues }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{addressFormatter(formikValues)}</p>
      <p>{formikValues.phone}</p>
    </div>
  );
};

export default CartFormValues;
