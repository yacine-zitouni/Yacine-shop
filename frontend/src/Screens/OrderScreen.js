/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { getOrderDetails } from "../actions/orderActions";
import Loader from "../Components/Loader";
import OrderLoader from "../Components/Loaders/OrderLoader";
const OrderScreen = ({ history, match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const { order, loading } = useSelector((state) => state.orderDetails);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [orderId]);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    if (order) {
      order.itemsPrice = addDecimals(
        order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
    }
  }
  return (
    <main className="font-roboto">
      {loading ? (
        <OrderLoader />
      ) : (
        <div className="container mx-auto ">
          <h1 className="heading-1 font-semibold ml-8 mt-8 col-span-full uppercase">
            order {order._id}
          </h1>

          <div className="md:grid md:grid-cols-3 lg:pl-18 pl-8  items-start lg:gap-x-24 xl:pl-18 py-12 gap-x-4">
            <div className=" mb-8 col-start-1 col-end-3 ">
              <ul className="divide-y-2 ">
                <li className="p-4 ">
                  <h1 className="heading-2 mb-3"> shipping</h1>
                  <p className="regular-text tracking-wider">
                    Name: {order.user.name}
                    <br />
                    Email: {order.user.email}
                    <br />
                    Adress: {order.shippingAddress.address},&nbsp;{" "}
                    {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode}, &nbsp;
                    {order.shippingAddress.country}
                  </p>
                </li>
                <li className="p-4">
                  <h1 className="heading-2 mb-3">payment method</h1>
                  <p className="regular-text"> Method: PayPal </p>
                </li>
                <li className="p-4">
                  <h1 className="heading-2 mb-3"> order items</h1>
                  {order.orderItems.map((item) => (
                    <div className="flex p-4 items-center ">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt="product" className="w-12" />
                        <Link
                          className="hover:underline text-gray-700"
                          to={`/product/${item.product}`}
                        >
                          {item.name}
                        </Link>
                      </div>
                      <p className="text-gray-600 ml-auto text-left">
                        {" "}
                        {item.qty} * ${item.price} = ${item.qty * item.price}{" "}
                      </p>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
            <div className="border mr-10 divide-y border-gray-300 flex flex-col  gap-2">
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
                <div className="mt-2">
                  <PayPalButton amount={order.totalPrice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default OrderScreen;
