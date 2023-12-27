import { paymentMethods } from "../../data/paymentMethods";
import PaymentMethod from "./PaymentMethod";

const PaymentMethods = () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-x-2">
      {paymentMethods.map((paymentMethod) => (
        <PaymentMethod key={paymentMethod.id} {...paymentMethod} />
      ))}
    </div>
  );
};

export default PaymentMethods;
