import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from "./reducers/orderReducers";
import {
  ProductListReducer,
  ProductItemReducer,
} from "./reducers/ProductReducers.js";
import {
  UserReducer,
  userUpdateProfileReducer,
} from "./reducers/UserReducers.js";
import { CartReducer } from "./reducers/CartReducer.js";
const reducer = combineReducers({
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderCreate: orderCreateReducer,
  productList: ProductListReducer,
  productItem: ProductItemReducer,
  user: UserReducer,
  userUpdate: userUpdateProfileReducer,
  cart: CartReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const preloadedState = {
  user: { user: userInfoFromStorage },
  cart: { shippingAddress: shippingAddressFromStorage, cart: cartFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
