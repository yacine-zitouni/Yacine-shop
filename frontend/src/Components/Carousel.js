import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Carousel = () => {
  const [product, setProduct] = useState({});
  const i = useRef(0);
  useEffect(() => {
    setProduct(products[0]);
  }, []);

  const onChevronLeftClick = () => {
    if (i.current > 0) {
      i.current = i.current - 1;

      setProduct(products[i.current]);
      if (i.current === 0) {
        document.getElementById("chev-left").setAttribute("disabled", "true");
      }
    }
  };
  const onChevronRightClick = () => {
    if (i.current < products.length - 1) {
      i.current = i.current + 1;
      setProduct(products[i.current]);
    }
  };
  return (
    <div
      className=" container my-24
    "
    >
      <div className=" relative py-60 mx-32 flex items-center gap-16 bg-gray-700  h-96 rounded-xl ">
        <Link to={`/product/${product._id}`}>
          <img
            className="  h-96 ml-8 rounded-full"
            src={product.image}
            alt="product"
          />
        </Link>
        <div className="  ">
          <Link to={`/product/${product._id}`}>
            <h2 className="h2 text-5xl my-10 text-gray-100">{product.name} </h2>
          </Link>
          <p className="subheading text-3xl mb-16 max-w-4xl text-gray-300">
            {product.description}{" "}
          </p>
          <p className="price mb-9 text-gray-100">
            <span className="dollar">$</span> {product.price}{" "}
          </p>
        </div>
        <button
          onClick={onChevronLeftClick}
          id="chev-left"
          className="rounded-full flex items-center  justify-center text-gray-700 top-1/2 left-0 border-gray-700 p-10 absolute bg-gray-100 text-5xl"
        >
          &lt;
        </button>
        <button
          onClick={onChevronRightClick}
          className="rounded-full transform translate-x-8 border-2  flex items-center justify-center top-1/2 right-0 text-gray-700 border-gray-700 p-8 absolute bg-gray-100 text-5xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
