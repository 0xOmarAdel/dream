import CartItems from "../components/CartItems/CartItems";
import { shippingFees } from "../data/shippingFees";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <section className="py-24 bg-gray-100 font-poppins">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div className="flex flex-wrap justify-between">
          {/* Cart Section */}
          <div className="w-full lg:w-2/3 mb-8 lg:-mt-16">
            <h2 className="mb-5 text-4xl font-bold text-sky-500">Your Cart</h2>
            <div className="p-6 mb-8 border bg-gray-50  dark:border-sky-100">
              {/* ... your cart items */}
              <CartItems />
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="w-full mx-3 -mt-1 p-6 border border-blue-100 bg-gray-50 md:p-8">
              <h2 className="mb-8 text-3xl font-bold text-sky-500">
                Order Summary
              </h2>
              {/* ... your order summary */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300  ">
                <span className=" text-gray-800">Subtotal</span>
                <span className="text-xl font-bold  text-gray-800 ">
                  ${totalPrice}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className=" text-gray-800 ">Shipping</span>
                <span className="text-xl font-bold  text-gray-800 ">
                  ${shippingFees === 0 ? "FREE" : shippingFees}
                </span>
              </div>
              <div className="flex items-center justify-between pb-4 mb-4 ">
                <span className=" text-gray-800">Order Total</span>
                <span className="text-xl font-bold  text-gray-800">
                  ${totalPrice + shippingFees}
                </span>
              </div>
              <h2 className="text-lg  text-gray-800">We offer:</h2>
              <div className="flex items-center gap-2 mb-4 ">
                <a href="#">
                  <img
                    src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                    alt=""
                    className="object-cover h-16 w-26"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                    alt=""
                    className="object-cover h-16 w-26"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                    alt=""
                    className="object-cover h-16 w-26"
                  />
                </a>
              </div>
              <div className="flex items-center justify-between ">
                <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
