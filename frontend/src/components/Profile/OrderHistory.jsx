import React from "react";

const OrderHistory = ({ OrderStat }) => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-full">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className="flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order #53453
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              24 December 2023 at 01:23 PM
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <div className="flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order #53454
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              24 December 2023 at 01:23 PM
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default OrderHistory;
