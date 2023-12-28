import { IoCartOutline } from "react-icons/io5";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/CartSummary/CartSummary";
import PaymentMethods from "../components/PaymentMethods/PaymentMethods";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Section from "../ui/Section";
import CartForm from "../components/CartForm/CartForm";
import { useState } from "react";
import Button from "../ui/Button";
import CartFormValues from "../components/CartForm/CartFormValues";
import { addressFormatter } from "../utils/addressFormatter";

const Cart = () => {
  const [formikValues, setFormikValues] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitOrderHandler = () => {
    console.log(addressFormatter(formikValues));
    console.log(formikValues.phone);
  };

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
      <div className="min-w-[20%] flex flex-col gap-12">
        <Card classes="grow">
          <CardTitle title="Shipping Address" />
          {formSubmitted ? (
            <CartFormValues formikValues={formikValues} />
          ) : (
            <CartForm
              setFormSubmitted={setFormSubmitted}
              setFormikValues={setFormikValues}
            />
          )}
        </Card>
        <Card>
          <CardTitle title="Order Summary" />
          <div className="flex flex-col gap-4">
            <CartSummary />
            <PaymentMethods />
            <Button
              type="submit"
              text="Confirm"
              disabled={!formSubmitted}
              onClick={submitOrderHandler}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Cart;
