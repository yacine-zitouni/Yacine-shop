import React, { useEffect } from "react";
import Cart from "../Components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { getProducts } from "../actions/ProductActions";
import CartLoader from "../Components/Loaders/CartLoader";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productList);
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Helmet>
        <title>{"Yacine Shop! Your online store"}</title>
      </Helmet>
      <main className="font-roboto ">
        <section className="hero">
          <div className="container  xl:px-20 mx-auto ">
            <h1 className="heading-1 uppercase mb-16 font-roboto">
              Latest Products:
            </h1>

            <div className="grid gap-x-14  gap-y-11  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-1 grid-cols-1 gap-y-26">
              {!loading
                ? products.map((product) => (
                    <Cart key={product._id} product={product} />
                  ))
                : [1, 2, 3, 4, 5, 6].map(() => <CartLoader />)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeScreen;
