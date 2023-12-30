import { useEffect } from "react";
import Order from "../components/Order/Order";
import useAxios from "../hooks/useAxios";

const Orders = () => {
  const { runAxios: fetchOrders, data: orders, loading } = useAxios("/orders");

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <>
      <div className="flex justify-start item-start space-y-4 flex-col">
        <h1 className="ml-6 mt-3 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-primary">
          My Orders
        </h1>
        <div className="border-gray-200 border-b-4 w-24 ml-6"></div>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        orders.map((order) => (
          <Order key={order._id} {...order} OrderStat={order.status} />
        ))
      )}
    </>
  );
};

export default Orders;
