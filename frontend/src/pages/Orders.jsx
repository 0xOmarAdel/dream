import { useEffect } from "react";
import Order from "../components/Order/Order";
import useAxios from "../hooks/useAxios";
import Banner from "../layout/Banner";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

const Orders = () => {
  const {
    runAxios: fetchOrders,
    data: orders,
    loading,
    error,
  } = useAxios("/orders");

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (loading) return <Loading />;

  return (
    <div className={`flex flex-col ${error ? "" : "gap-10"}`}>
      <Banner
        title="orders history"
        breadcrumbs={[
          { text: "profile", path: "/profile" },
          { text: "orders" },
        ]}
      />
      {error ? (
        <Error />
      ) : (
        <div className="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          {orders.map((order) => (
            <Order key={order._id} {...order} OrderStat={order.status} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
