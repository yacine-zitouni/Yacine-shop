import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Reviews from "../Components/Reviews";
import { Helmet } from "react-helmet";
import { getProduct } from "../actions/ProductActions";
import ProductLoader from "../Components/Loaders/ProductLoader";

const ProductScreen = (props) => {
  const id = props.match.params.id;
  const [qty, setQty] = useState(1);
  const handleOnClick = () => {
    props.history.push(`/cart/${id}?qty=${qty}`);
  };

  const { product, loading } = useSelector((state) => state.productItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  return (
    <>
      {!loading && (
        <Helmet>
          <title>
            {`
         
        ${product.name}
          `}
          </title>
        </Helmet>
      )}

      <main>
        <section className="hero ">
          <div className="container mx-auto px-14">
            <Link
              to="/"
              className="btn mb-3 hover:text-gray-100  hover:bg-gray-700"
            >
              Go back
            </Link>
            {!loading ? (
              <div className="grid gap-x-6  items-start lg:grid-cols-productScreen">
                <div className="">
                  <img src={product.image} alt="product" className="" />
                </div>
                <div className="divide-y-2 p-5">
                  <h1 className="uppercase text-2xl leading-tight text-gray-800 tracking-wide mb-6">
                    {product.name}
                  </h1>
                  <div className="flex  py-3 items-center gap-2">
                    <Reviews rating={product.rating} />
                    <span className="text-gray-500 ">
                      <span className="inline text-gray-600">
                        {product.numReviews}
                      </span>
                      &nbsp;reviews
                    </span>
                  </div>
                  <p className="py-3">
                    <span className="text-gray-500">Price: &nbsp;</span>
                    <span className="text-sm">$</span> {product.price}
                  </p>
                  <p className="regular-text py-4">
                    Description: {product.description}
                  </p>
                </div>
                <ul className=" border divide-y divide-gray-300 border-gray-300">
                  <li className="flex  p-5 items-center justify-between">
                    <span className=" text-gray-700">Price:</span>
                    <span className="text-xl mr-4 tracking-wider ">
                      <span className="text-sm">$</span> {product.price}
                    </span>
                  </li>
                  <li className="flex p-5 items-center justify-between  ">
                    <span className="text-gray-700">Status:</span>
                    <span className="mr-4 text-lg ">
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </li>
                  {product.countInStock > 0 && (
                    <li className="flex p-5 items-center justify-between  ">
                      <span className="text-gray-700">Qty:</span>
                      <div key={product.qty}>
                        <select
                          defaultValue={product.qty}
                          className="cursor-pointer "
                          onChange={(e) => {
                            setQty(e.target.value);
                          }}
                          name="qty"
                          id="qte"
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option value={x + 1} key={x}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </li>
                  )}
                  <li className="px-5 py-3">
                    <button
                      className="inline-block  disabled:opacity-40 uppercase bg-gray-900 w-full text-white  py-4 px-10   "
                      disabled={product.countInStock > 0 ? false : true}
                      onClick={handleOnClick}
                    >
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <ProductLoader />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductScreen;
