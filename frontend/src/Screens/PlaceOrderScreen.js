import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../actions/orderActions";
import { Link } from "react-router-dom";
const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success } = orderCreate;
  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: "USER_DETAILS_RESET" });
      dispatch({ type: "ORDER_CREATE_RESET" });
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cart,
        shippingAddress: cart.shippingAddress,

        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
    history.push();
  };

  const { user } = useSelector((state) => state.user);
  const { address, city, postalCode, country } = useSelector(
    (state) => state.cart.shippingAddress
  );
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);
  return (
    <main className="font-roboto">
      <div className="container mx-auto ">
        <div className="md:grid md:grid-cols-3 lg:pl-18 pl-8  items-start lg:gap-x-24 xl:pl-18 py-12 gap-x-8">
          <div className=" mb-20 md:mb-8 col-start-1 col-end-3 ">
            <ul className="divide-y-2 ">
              <li className="p-4 ">
                <h1 className="heading-2 mb-3"> shipping</h1>
                <p className="regular-text">
                  {" "}
                  Adress: {address},&nbsp; {city} {postalCode}, &nbsp;{country}{" "}
                </p>
              </li>
              <li className="p-4">
                <h1 className="heading-2 mb-3">payment method</h1>
                <p className="regular-text"> Method: Paypal </p>
              </li>
              <li className="p-4">
                <h1 className="heading-2 mb-3"> order items</h1>
                {cart.cart.map((item) => (
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
                <span> ${cart.itemsPrice} </span>
              </li>
              <li className="flex justify-between p-3 pr-8 items-center">
                <span>Shipping</span>
                <span> ${cart.shippingPrice} </span>
              </li>
              <li className="flex justify-between pr-8 p-3 items-center">
                <span>Tax</span>
                <span> ${cart.taxPrice} </span>
              </li>
              <li className="flex justify-between pr-8 p-3 items-center">
                <span>Total</span>
                <span> ${cart.totalPrice} </span>
              </li>
            </ul>
            <div className="py-3 px-5   border-gray-300">
              <button
                onClick={placeOrderHandler}
                className=" uppercase  text-sm p-4 w-full text-white bg-heading"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlaceOrderScreen;
