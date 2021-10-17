import React from "react";

const CartLoader = () => {
  return (
    <div className=" p-3 sm:mx-auto m-6 border w-full  rounded-sm border-gray-300 animate-pulse">
      <div className="bg-gray-300 w-full  h-40 mb-4 "></div>
      <div className="p-4 pl-1">
        <div className="loader mb-1 h-6"></div>
        <div className="loader h-6 w-10/12"></div>
        <div className="loader h-8 w-6/12 mt-9 mb-4"></div>
      </div>
    </div>
  );
};

export default CartLoader;
