import { paymentMethods } from "../data/paymentMethods";

const PaymentMethods = () => {
  return (
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
  );
};

export default PaymentMethods;
