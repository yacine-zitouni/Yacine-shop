import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../actions/CartActions";
import Message from "../Components/Message";
const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const onBtnClick = () => {
    props.history.push("/login?redirect=shipping");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const { cart } = useSelector((state) => state.cart);
  const nb = cart.reduce((acc, item) => acc + 1, 0);
  const amount = cart
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);
  return (
    <main>
      <div className="container lg:pl-20 mx-auto md:grid-cols-3 gap-x-8 items-start md:grid">
        <div className="md:col-start-1 md:col-end-3 ">
          <h1 className="heading-1 tracking-widest uppercase">Shopping Cart</h1>
          <div className="p-12 md:p-6  divide-y-2">
            {cart.length > 0 ? (
              cart.map((product) => (
                <CartItem
                  onRemoveClick={() =>
                    dispatch(removeFromCart(product.product))
                  }
                  key={product.product}
                  product={product}
                  onQtyChange={(e) =>
                    dispatch(addToCart(product.product, Number(e.target.value)))
                  }
                />
              ))
            ) : (
              <div className="mb-3">
                <Link
                  to="/"
                  className="btn mb-3 hover:text-gray-100  hover:bg-gray-700"
                >
                  Go back
                </Link>
                <Message type="success" message="Your cart is Empty" />
              </div>
            )}
          </div>
        </div>
        <div className="border xl:mr-10 border-gray-400 flex flex-col  gap-2">
          <h1 className="text-xl ml-3 my-3 text-gray-600 tracking-wider uppercase">
            subtotal ({nb}) items
          </h1>
          <p className="ml-3 tracking-wider  text-lg">$&nbsp;{amount}</p>
          <div className="py-3 lg:px-5 border-t border-gray-400">
            <button
              disabled={cart.length === 0}
              onClick={onBtnClick}
              className=" uppercase disabled:opacity-40 text-sm tracking-tighter p-4 w-full text-white bg-gray-900"
            >
              Procced to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartScreen;
