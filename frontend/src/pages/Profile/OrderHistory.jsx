// src/components/OrderHistory.js
import React, { useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Assume you have a way to fetch order history and update orders state accordingly

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-6">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {orders.map((order, index) => (
            <li key={index} className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{order.item}</h3>
                  <p className="text-gray-500">
                    {order.date.toDateString()} at {order.time}
                  </p>
                </div>
                {/* Add additional details or actions if needed */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
