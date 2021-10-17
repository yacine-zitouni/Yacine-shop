import React from "react";

const ProductLoader = () => {
  return (
    <div className="grid gap-x-6  animate-pulse items-start lg:grid-cols-productScreen">
      <div className="loader w-full h-100 rounded-none"></div>
      <div className=" p-4">
        <div>
          <div className="loader h-9 w-11/12 mb-1"></div>
          <div className="loader h-9 w-9/12  border-gray-600 mb-4"></div>

          <div className="border-t mb-3 animate-none"></div>
        </div>
        <div className="p-3 loader h-8"></div>
        <div className="border-t pt-3 mt-3 animate-none">
          <div className="loader h-8  p-3"></div>
        </div>
        <div className="border-t pt-3 mt-3 animate-none">
          <div className="loader h-5 w-11/12 mb-1"></div>
          <div className="loader h-5 w-9/12 mb-1"></div>
          <div className="loader h-5 w-9/12 mb-1"></div>
          <div className="loader h-5 w-11/12 mb-1"></div>
          <div className="loader h-5 w-9/12 mb-1"></div>

          <div className="loader h-5 w-9/12 mb-1"></div>
        </div>
      </div>
      <ul className=" border divide-y animate-pulse divide-gray-300 border-gray-300">
        <div className="animate-none border-b">
          <li className="loader  mx-3 my-2 h-10"></li>
        </div>{" "}
        <div className="animate-none border-b">
          <li className="loader  mx-3 my-2 h-10"></li>
        </div>
        <div className="animate-none border-b">
          <li className="loader  mx-3 my-2 h-10"></li>
        </div>{" "}
        <li className="px-5 animate-none  py-3">
          <button
            className="inline-block  disabled:opacity-40 uppercase bg-gray-900 w-full text-white  py-4 px-10   "
            disabled={true}
          >
            Add to Cart
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductLoader;
