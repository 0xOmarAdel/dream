import { IoCartOutline } from "react-icons/io5";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/CartSummary/CartSummary";
import PaymentMethods from "../components/PaymentMethods";

const Cart = () => {
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
              <CartSummary />
              <PaymentMethods />
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
