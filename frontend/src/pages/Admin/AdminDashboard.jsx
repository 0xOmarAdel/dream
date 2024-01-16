import { useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../../ui/Card";
import {
  MdCalendarToday,
  MdDashboard,
  MdFastfood,
  MdOutlineChecklist,
} from "react-icons/md";
import Loading from "../../ui/Loading";

const AdminDashboard = () => {
  const {
    runAxios: fetchDashboard,
    data: dashboard,
    loading,
  } = useAxios("/admin/dashboard");

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  const cardsData = [
    {
      icon: <MdFastfood className="text-3xl -ml-2 -mt-2" />,
      count: dashboard?.mealsCount,
      label: "Meals",
    },
    {
      icon: <MdDashboard className="text-3xl -ml-2 -mt-2" />,
      count: dashboard?.categoriesCount,
      label: "Categories",
    },
    {
      icon: <MdOutlineChecklist className="text-3xl -ml-2 -mt-2" />,
      count: dashboard?.ordersCount,
      label: "Orders",
    },
    {
      icon: <MdCalendarToday className="text-3xl -ml-2 -mt-2" />,
      count: dashboard?.reservationsCount,
      label: "Reservations",
    },
  ];

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-2 px-4 lg:grid-cols-4 h-fit overflow-y-auto gap-4">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          classes="flex justify-center bg-primary text-white p-0 h-28"
        >
          <div className="flex items-center text-center">
            {card.icon}
            <div className="flex flex-col">
              <h1 className="font-semibold text-4xl">{card.count}</h1>
              <h1 className="font-medium">{card.label}</h1>
            </div>
          </div>
        </Card>
      ))}
      <div className="w-full col-span-2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Latest Orders
          </h5>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {dashboard.usersCount.latestCustomers
              .filter((order) => order.latestOrder.spent >= 1)
              .map((order, index) => (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {`${order.firstName} ${order.lastName}`}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {order.email}
                      </p>
                    </div>
                    {order.latestOrder.spent >= 1 && (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {"$" + order.latestOrder.spent.toFixed(2)}
                      </div>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex flex-col items-center justify-between space-y-12 mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Total Money
          </h5>
          <p className="font-medium text-3xl items-center">
            {"$" + dashboard.totalAmountOfCompletedOrders}
          </p>
        </div>
      </div>
      <div className="w-full h-fit p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex flex-col items-center space-y-12 justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Users
          </h5>
          <p className="font-medium text-3xl items-center">
            {dashboard.usersCount.usersCount}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
