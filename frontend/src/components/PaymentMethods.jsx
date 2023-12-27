import { paymentMethods } from "../data/paymentMethods";

const PaymentMethods = () => {
  return (
    <div className="flex flex-row flex-wrap items-center gap-x-2">
      {paymentMethods.map((paymentMethod) => (
        <img
          key={paymentMethod.id}
          src={paymentMethod.src}
          alt={paymentMethod.id}
          className="object-cover w-14 h-14"
        />
      ))}
    </div>
  );
};

export default PaymentMethods;
