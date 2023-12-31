import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Order from "../../components/Order/Order";

const AdminOrders = () => {
  const {
    runAxios: fetchOrders,
    data: orders,
    loading,
    error,
  } = useAxios("/orders", "GET");
  const [selectedStatus, setSelectedStatus] = useState("all");
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const filteredOrders = () => {
    console.log("All Orders:", orders);

    if (selectedStatus === "all") {
      console.log("Filtered Orders (All):", orders);
      return orders;
    } else {
      const filtered = orders.filter(
        (order) => order.status === selectedStatus
      );
      console.log(`Filtered Orders (${selectedStatus}):`, filtered);
      return filtered;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching orders.</div>;
  }

  if (!orders) {
    return <div>No orders available.</div>;
  }

  return (
    <div>
      <label>
        Select Order Status:
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Shipping">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </label>

      <div className="h-screen overflow-y-auto">
        {filteredOrders().map((order) => (
          <div className="" key={order._id}>
            <Order {...order} OrderStat={order.status} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminOrders;
