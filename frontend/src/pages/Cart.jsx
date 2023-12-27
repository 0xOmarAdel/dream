import { IoCartOutline } from "react-icons/io5";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/CartSummary/CartSummary";
import PaymentMethods from "../components/PaymentMethods";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";

const Cart = () => {
  return (
    <section className="py-24 bg-gray-100 font-poppins">
      <div className="px-24 py-6 lg:py-4 md:px-24">
        <div className="flex flex-col xl:flex-row gap-12">
          <Card classes="grow">
            <CardTitle
              title="Shopping Cart"
              icon={IoCartOutline}
              iconClasses="text-4xl"
            />
            <CartItems />
          </Card>
          <Card classes="min-w-[20%]">
            <CardTitle title="Order Summary" />
            <div className="flex flex-col gap-4">
              <CartSummary />
              <PaymentMethods />
              <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-blue-500 rounded-md hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cart;
