import { priceFormatter } from "../../utils/priceFormatter";
import { shippingFees } from "../../data/shippingFees";

const CartSummaryTotal = ({ totalPrice }) => {
  return (
    <div className="flex items-center justify-between">
      <span>Total</span>
      <span className="text-xl font-bold  ">
        {priceFormatter(totalPrice + shippingFees)}
      </span>
    </div>
  );
};

export default CartSummaryTotal;
