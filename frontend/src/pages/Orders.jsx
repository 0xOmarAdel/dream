import Order from "../components/Order/Order";

const Orders = () => {
  return (
    <>
      <div className="flex justify-start item-start space-y-4 flex-col">
        <h1 className="ml-6 mt-3 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-primary">
          My Orders
        </h1>
        <div className="border-gray-200 border-b-4 w-24 ml-6"></div>
      </div>

      <Order OrderStat="Pending" />
      <Order OrderStat="Delivered" />
    </>
  );
};

export default Orders;
