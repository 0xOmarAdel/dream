const PaymentMethod = ({ id, src }) => {
  return <img src={src} alt={id} className="object-cover w-14 h-14" />;
};

export default PaymentMethod;
