import axios from "axios";

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: "CART_SAVE_SHIPPING_ADDRESS",
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  console.log(getState());
  const { _id, name, image, price, countInStock } = data.product;
  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      product: _id,
      name: name,
      image: image,
      price: price,
      countInStock: countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });
  localStorage.setItem(
    "cart",
    JSON.stringify(getState().cart.cart.filter((x) => x.product !== id))
  );
};
