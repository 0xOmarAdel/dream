import { useSelector } from "react-redux";
import CartSummaryCartTotal from "./OrderSummaryCartTotal";
import CartSummaryShippingFees from "./OrderSummaryShippingFees";
import CartSummaryTotal from "./OrderSummaryTotal";
import Divider from "../../ui/Divider";
import OrderSummaryAddress from "./OrderSummaryAddress";
import OrderSummaryPhone from "./OrderSummaryPhone";

const CartSummary = ({ formikValues }) => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex flex-col gap-3 text-gray-700 font-medium">
      <OrderSummaryAddress formikValues={formikValues} />
      <OrderSummaryPhone phone={formikValues.phone} />
      <Divider />
      <CartSummaryCartTotal totalPrice={totalPrice} />
      <CartSummaryShippingFees />
      <Divider />
      <CartSummaryTotal totalPrice={totalPrice} />
    </div>
  );
};

export default CartSummary;
