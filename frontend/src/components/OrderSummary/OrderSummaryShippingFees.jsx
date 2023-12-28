import { priceFormatter } from "../../utils/priceFormatter";
import { shippingFees } from "../../data/shippingFees";

const CartSummaryShippingFees = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <span>Shipping Fees</span>
      <span className="text-xl font-bold">
        {shippingFees === 0 ? "FREE" : priceFormatter(shippingFees)}
      </span>
    </div>
  );
};

export default CartSummaryShippingFees;
