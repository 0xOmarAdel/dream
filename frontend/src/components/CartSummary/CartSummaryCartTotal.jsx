import { priceFormatter } from "../../utils/priceFormatter";

const CartSummaryCartTotal = ({ totalPrice }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <span>Cart Total</span>
      <span className="text-xl font-bold">{priceFormatter(totalPrice)}</span>
    </div>
  );
};

export default CartSummaryCartTotal;
