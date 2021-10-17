import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Header from "./Components/Header";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import ProductScreen from "./Screens/ProductScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import OrderScreen from "./Screens/OrderScreen";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />

        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/me" component={ProfileScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />

        <Route path="/login" component={LoginScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
