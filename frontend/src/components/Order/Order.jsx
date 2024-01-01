import OrderStatus from "./OrderStatus";
import { PiPhone } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { priceFormatter } from "../../utils/priceFormatter";
import { SlEnvolope } from "react-icons/sl";
import OrderMeals from "./OrderMeals";

const Order = ({
  _id,
  address,
  phone,
  meals,
  shipping,
  subtotal,
  total,
  status,
  userId,
}) => {
  const location = useLocation();
  const isAdminOrders = location.pathname === "/admin/orders";

  return (
    <div className="py-16 border-b last-of-type:border-none">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #{_id.slice(4, 10)}{" "}
          <OrderStatus status={status} isAdminOrders={isAdminOrders} id={_id} />
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          24 December 2023 at 01:23 PM
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <OrderMeals meals={meals} />
        <div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    {priceFormatter(subtotal)}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">
                    {priceFormatter(shipping)}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  {priceFormatter(total)}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer
            </h3>
            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-5 border-b border-gray-200">
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      {`${userId.firstName} ${userId.lastName}`}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <SlEnvolope className="text-xl text-gray-600" />
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {userId.email}
                  </p>
                </div>
                <div className="w-full flex justify-center md:justify-start space-x-4 items-center pt-2">
                  <PiPhone className="text-xl text-gray-600" />
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    {phone}
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      {address}
                    </p>
                  </div>
                </div>
                {!isAdminOrders && status === "Pending" && (
                  <div className="flex w-full mt-4 justify-center items-center md:justify-start md:items-start">
                    <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                      Edit Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Order;
