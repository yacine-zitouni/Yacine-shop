import React from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";
const Cart = ({ product }) => {
  return (
    <div className=" p-3 sm:mx-auto m-6 border rounded-sm border-gray-300">
      <Link className=" inline-block " to={`/product/${product._id}`}>
        <img src={product.image} alt="product" />
      </Link>
      <div className="p-5">
        <Link
          className="product-title hover:underline text-xl inline-block mb-4"
          to={`/product/${product._id}`}
        >
          <h3>{product.name}</h3>
        </Link>
        <p className=" flex items-center  gap-x-1  mb-4 ">
          <Reviews rating={product.rating} />
          <span className="text-gray-400 ">
            <span className=" text-gray-500">{product.numReviews}</span>
            reviews
          </span>
        </p>
        <p className="text-lg  tracking-wider  ">
          <span className="text-sm"> $ </span> {product.price}
        </p>
      </div>
    </div>
  );
};

export default Cart;
