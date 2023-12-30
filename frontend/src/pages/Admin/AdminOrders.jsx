import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Order from "../../components/Order/Order";

const AdminOrders = () => {
  const { runAxios: fetchOrders, data: orders, loading } = useAxios("/orders");

  console.log(orders);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div>
      {orders?.map((order) => (
        <Order key={order._id} {...order} OrderStat="Pending" />
      ))}
    </div>
  );
};
export default AdminOrders;
