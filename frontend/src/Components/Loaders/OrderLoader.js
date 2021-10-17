import React from "react";

const OrderLoader = () => {
  return (
    <div className="container animate-pulse mx-auto ">
      <div className="h-12  w-7/12 ml-8 mt-8 loader "></div>

      <div className="md:grid md:grid-cols-3 lg:pl-18 pl-8  items-start lg:gap-x-24 xl:pl-18 py-12 gap-x-4">
        <div className=" mb-8 col-start-1 col-end-3 ">
          <ul className="divide-y-2 ">
            <li className="p-3 ">
              <div className="h-10  w-3/12 loader mb-3"></div>
              <div className="loader h-6 w-2/12 mb-2"> </div>
              <div className="loader h-6 w-4/12 mb-2"> </div>
              <div className="loader h-6 w-4/12 mb-2"> </div>
            </li>
            <li className="p-4">
              <div className="h-10  w-3/12 loader mb-3"></div>
              <div className="loader h-7 w-1/6"></div>
            </li>
            <li className="p-2">
              <div className="h-10  w-3/12 loader"></div>

              <div className="flex p-2 items-center gap-4">
                <div className="w-12 h-12 loader"></div>
                <div className="loader h-6 w-4/12"></div>
                <div className="loader h-6 w-3/12 ml-auto"></div>
              </div>
            </li>
          </ul>
        </div>

        {/*   <div className="border mr-10 divide-y border-gray-300 flex flex-col  gap-2">
              <h1 className="heading-2 p-4 ">order summary</h1>
              <ul className="  text-gray-600 divide-y ">
                <li className="flex justify-between p-3 pr-8   items-center">
                  <span>Items</span>
                  <span> ${order.itemsPrice} </span>
                </li>
                <li className="flex justify-between p-3 pr-8 items-center">
                  <span>Shipping</span>
                  <span> ${order.shippingPrice} </span>
                </li>
                <li className="flex justify-between pr-8 p-3 items-center">
                  <span>Tax</span>
                  <span> ${order.taxPrice} </span>
                </li>
                <li className="flex justify-between  pr-8 p-3 items-center">
                  <span>Total</span>
                  <span> ${order.totalPrice} </span>
                </li>
              </ul>
              <div className="border-gray-300">
                <div className="mt-5 mx-2">
                  <PayPalButton amount={order.totalPrice} />
                </div>
              </div>
            </div>
        */}
      </div>
    </div>
  );
};

export default OrderLoader;
