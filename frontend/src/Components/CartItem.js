import React from "react";
import { TrashIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const CartItem = ({ product, onQtyChange, onRemoveClick }) => {
  return (
    <div className="  flex flex-col md:flex-row gap-6 py-4">
      <img src={product.image} alt="product" className="md:w-24 rounded-sm" />
      <Link
        className="text-xl lg:text-sm lg:w-1/4  lg:mr-10 hover:underline"
        to={`/product/${product.product}`}
      >
        <p className=" text-heading tracking-wider  w-full"> {product.name}</p>
      </Link>
      <p className="inline-block lg:w-22 mr-10 text-gray-700 tracking-wider">
        ${product.price}{" "}
      </p>
      <div key={product.qty}>
        <select
          defaultValue={product.qty}
          className="cursor-pointer self-start bg-gray-100 border-0 text-gray-600 text-md font-serif "
          name="qty"
          onChange={onQtyChange}
          id="qte"
        >
          {[...Array(product.countInStock).keys()].map((x) => (
            <option value={x + 1} key={x}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={onRemoveClick}
        className="flex items-start pt-2 hover:bg-gray-300 self-start justify-center p-3"
      >
        <TrashIcon className="h-6 w-6 " />
      </button>
    </div>
  );
};

export default CartItem;
