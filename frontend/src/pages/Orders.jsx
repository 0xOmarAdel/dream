import { useEffect } from "react";
import Order from "../components/Order/Order";
import useAxios from "../hooks/useAxios";
import Banner from "../layout/Banner";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import Section from "../ui/Section";

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
    <div className="flex flex-col">
      <Banner
        title="orders history"
        breadcrumbs={[
          { text: "profile", path: "/profile" },
          { text: "orders" },
        ]}
      />
      {error ? (
        <Error message="An error occurred while fetching your data!" />
      ) : orders.length === 0 ? (
        <Error message="Your orders history is empty!" />
      ) : (
        <Section>
          {orders.map((order) => (
            <Order key={order._id} {...order} OrderStat={order.status} />
          ))}
        </Section>
      )}
    </div>
  );
};

export default Orders;
