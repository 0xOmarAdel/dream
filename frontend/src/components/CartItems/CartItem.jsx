import CartItemTitle from "./CartItemDetails/CartItemTitle";
import CartItemPrice from "./CartItemDetails/CartItemPrice";
import CartItemImage from "./CartItemDetails/CartItemImage";
import CartItemSubTotal from "./CartItemDetails/CartItemSubTotal";
import IncreaseCartItemButton from "./CartItemButtons/IncreaseCartItemButton";
import DecreaseCartItemButton from "./CartItemButtons/DecreaseCartItemButton";
import DeleteCartItemButton from "./CartItemButtons/RemoveCartItemButton";
import CartItemQuantity from "./CartItemDetails/CartItemQuantity";
import CartItemSize from "./CartItemDetails/CartItemSize";
import CartItemCategory from "./CartItemDetails/CartItemCategory";

const CartItem = ({ cartItem }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-2">
      <div className="flex flex-row gap-5">
        <CartItemImage image={cartItem.image} title={cartItem.title} />
        <div className="flex flex-col gap-0.5">
          <CartItemCategory category={cartItem.categoryName} />
          <CartItemTitle title={cartItem.title} />
          <CartItemSize size={cartItem.size} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <CartItemSubTotal price={cartItem.price} quantity={cartItem.quantity} />
        <div className="flex flex-row justify-center items-center gap-4">
          <DecreaseCartItemButton
            cartItemId={cartItem.id}
            quantity={cartItem.quantity}
          />
          <CartItemQuantity quantity={cartItem.quantity} />
          <IncreaseCartItemButton cartItemId={cartItem.id} />
        </div>
        <DeleteCartItemButton meal={cartItem} />
      </div>
    </div>
  );
};

export default CartItem;
