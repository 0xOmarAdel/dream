import { IoCartOutline } from "react-icons/io5";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/CartSummary/CartSummary";
import PaymentMethods from "../components/PaymentMethods/PaymentMethods";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Section from "../ui/Section";

const Cart = () => {
  return (
    <Section classes="flex flex-col xl:flex-row gap-12">
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
    </Section>
  );
};

export default Cart;
