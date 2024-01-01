import { useEffect } from "react";
import Order from "../components/Order/Order";
import useAxios from "../hooks/useAxios";
import Banner from "../layout/Banner";
import Loading from "../ui/Loading";

const Orders = () => {
  const { runAxios: fetchOrders, data: orders, loading } = useAxios("/orders");

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="flex flex-col gap-10">
      <Banner title="orders history" />
      {loading ? (
        <Loading />
      ) : (
        <div className=" px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          {orders.map((order) => (
            <Order key={order._id} {...order} OrderStat={order.status} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
