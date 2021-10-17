export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;

      const existItem = state.cart.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, item] };
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cart: [...state.cart.filter((x) => x.product !== action.payload)],
      };

    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case "CART_SAVE_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case "CART_CLEAR_ITEMS":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
