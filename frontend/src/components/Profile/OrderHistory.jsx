import React from "react";
import OrderStatus from "../Order/OrderStatus";

const OrderHistory = ({ OrderStat }) => {
  return (
    <>
      <details className="collapse bg-base-200 ">
        <summary className="collapse-title text-xl font-medium">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #53453 <OrderStatus status={OrderStat} />
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            24 December 2023 at 01:23 PM
          </p>
        </summary>
        <div className="collapse-content">
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">$23.00</p>
                </div>

                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$5.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  $35.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </details>
      <div className="divider"></div>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #53453 <OrderStatus status={OrderStat} />
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            24 December 2023 at 01:23 PM
          </p>
        </summary>
        <div className="collapse-content">
          <p>content</p>
        </div>
      </details>
    </>
  );
};

export default OrderHistory;
