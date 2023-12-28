import { IoCartOutline } from "react-icons/io5";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/OrderSummary/OrderSummary";
import PaymentMethods from "../components/PaymentMethods/PaymentMethods";
import Card from "../ui/Card";
import CardTitle from "../ui/CardTitle";
import Section from "../ui/Section";
import CartForm from "../components/CartForm/OrderAddressForm";
import { useState } from "react";
import Button from "../ui/Button";
import { addressFormatter } from "../utils/addressFormatter";
import { AnimatePresence } from "framer-motion";

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
      <Card classes="min-w-[20%]">
        <AnimatePresence>
          {!formSubmitted ? (
            <>
              <CardTitle title="Shipping Address" />
              <CartForm
                setFormSubmitted={setFormSubmitted}
                setFormikValues={setFormikValues}
              />
            </>
          ) : (
            <>
              <CardTitle title="Order Summary" />
              <div className="flex flex-col gap-4">
                <CartSummary formikValues={formikValues} />
                <PaymentMethods />
                <Button
                  type="submit"
                  text="Confirm"
                  onClick={submitOrderHandler}
                />
                <Button
                  text="Cancel"
                  onClick={() => setFormSubmitted(false)}
                />
              </div>
            </>
          )}
        </AnimatePresence>
      </Card>
    </Section>
  );
};

export default Cart;
