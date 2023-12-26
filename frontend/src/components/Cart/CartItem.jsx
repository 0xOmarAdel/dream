import CartItemTitle from "./CartItemDetails/CartItemTitle";
import CartItemPrice from "./CartItemDetails/CartItemPrice";
import CartItemImage from "./CartItemDetails/CartItemImage";
import CartItemSubTotal from "./CartItemDetails/CartItemSubTotal";
import IncreaseCartItemButton from "./CartItemButtons/IncreaseCartItemButton";
import DecreaseCartItemButton from "./CartItemButtons/DecreaseCartItemButton";
import DeleteCartItemButton from "./CartItemButtons/RemoveCartItemButton";

const CartItem = ({ cartItem }) => {
  return (
    <div
      className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8"
      key={cartItem.id}
    >
      <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-3 md:w-1/3">
            <div className="w-full h-96 md:h-24 md:w-24">
              <CartItemImage
                image={"https://cafeu.vercel.app/img/product/12.png"}
              />
            </div>
          </div>
          <div className="w-2/3 px-4">
            <CartItemTitle title={cartItem.title} />
            <p className=" text-gray-800 ">Barbecue</p>
          </div>
        </div>
      </div>
      <div className="hidden px-4 lg:block lg:w-2/12">
        <CartItemPrice price={cartItem.price} />
      </div>
      <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
        <div className="inline-flex items-center px-4 font-semibold  border-gray-200 rounded-md">
          <DecreaseCartItemButton />
          <input
            type="number"
            className="w-12 px-2 py-4 text-center border-0 rounded-md  bg-gray-50 md:text-right placeholder-gray-800"
            placeholder="1"
          />
          <IncreaseCartItemButton />
        </div>
        <DeleteCartItemButton meal={cartItem} />
      </div>
      <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
        <CartItemSubTotal price={cartItem.price} quantity={cartItem.quantity} />
      </div>
    </div>
  );
};

export default CartItem;
