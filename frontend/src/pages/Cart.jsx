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
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [formikValues, setFormikValues] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  const {
    runAxios: submitOrder,
    isExecuting,
    error,
  } = useAxios("/orders", "POST", {
    address: addressFormatter(formikValues),
    phone: formikValues.phone,
  });

  const submitOrderHandler = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    submitOrder();

    if (error) {
      toast.error("An error occurred while confirming your order.");
    } else {
      dispatch(emptyCart());
      toast.success("You've successfully confirmed your order.");
    }
  };

  return (
    <Section classes="flex flex-col xl:flex-row gap-12">
      <Card classes="grow">
        <CardTitle
          title="Shopping Cart"
          icon={IoCartOutline}
          iconClasses="text-4xl"
        />
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-500">
            Your cart is empty. Add meals to your cart from our{" "}
            <Link to="/menu" className="text-primary font-medium">
              menu
            </Link>{" "}
            to be able to make an order!
          </p>
        ) : (
          <CartItems />
        )}
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
                  disabled={isExecuting}
                />
                <Button text="Cancel" onClick={() => setFormSubmitted(false)} />
              </div>
            </>
          )}
        </AnimatePresence>
      </Card>
    </Section>
  );
};

export default Cart;
