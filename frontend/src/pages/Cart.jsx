import CartItems from "../components/CartItems/CartItems";
import { shippingFees } from "../data/shippingFees";
import { useSelector } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <section className="py-24 bg-gray-100 font-poppins">
      <div className="px-24 py-6 lg:py-4 md:px-24">
        <div className="flex flex-col xl:flex-row  gap-8">
          <div className="grow p-6 border bg-gray-50">
            <h2 className="flex flex-row items-center gap-3 mb-8 text-3xl text-primary font-medium">
              <IoCartOutline className="text-4xl" />
              Shopping Cart
            </h2>
            <CartItems />
          </div>
          <div className="min-w-[20%] p-6 border border-blue-100 bg-gray-50 md:p-8">
            <h2 className="mb-8 text-3xl text-primary font-medium">
              Order Summary
            </h2>
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
    </section>
  );
};

export default Cart;
