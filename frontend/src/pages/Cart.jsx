import CartItems from "../components/CartItems/CartItems";
import { shippingFees } from "../data/shippingFees";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { priceFormatter } from "../utils/priceFormatter";
import { paymentMethods } from "../data/paymentMethods";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <section className="py-24 bg-gray-100 font-poppins">
      <div className="px-24 py-6 lg:py-4 md:px-24">
        <div className="flex flex-col xl:flex-row gap-12">
          <div className="grow h-fit p-8 pb-10 border bg-gray-50 rounded-md shadow-md">
            <h2 className="flex flex-row items-center gap-3 mb-8 text-3xl text-primary font-medium">
              <IoCartOutline className="text-4xl" />
              Shopping Cart
            </h2>
            <CartItems />
          </div>
          <div className="min-w-[20%] h-fit p-8 pb-10 border bg-gray-50 rounded-md shadow-md">
            <h2 className="mb-8 text-3xl text-primary font-medium">
              Order Summary
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 text-gray-700 font-medium">
                <div className="flex flex-row items-center justify-between">
                  <span>Cart Total</span>
                  <span className="text-xl font-bold">
                    {priceFormatter(totalPrice)}
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <span>Shipping Fees</span>
                  <span className="text-xl font-bold">
                    {shippingFees === 0 ? "FREE" : priceFormatter(shippingFees)}
                  </span>
                </div>
                <div className="divider divider-primary my-0"></div>
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <span className="text-xl font-bold  ">
                    {priceFormatter(totalPrice + shippingFees)}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                {paymentMethods.map((paymentMethod) => (
                  <img
                    key={paymentMethod.id}
                    src={paymentMethod.src}
                    alt={paymentMethod.id}
                    className="object-cover h-16 w-26"
                  />
                ))}
              </div>
              <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
