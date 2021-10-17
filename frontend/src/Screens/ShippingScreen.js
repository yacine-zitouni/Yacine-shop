import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/CartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [history, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/placeorder");
  };

  return (
    <main>
      <div className="container flex justify-center mx-auto ">
        <div className="w-5/12 ">
          <h2 className="h2 uppercase tracking-widest mb-6 text-heading">
            Shipping{" "}
          </h2>

          <form onSubmit={submitHandler} className="space-y-7 text-gray-700">
            <div>
              Address <br />
              <input
                required={true}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="p-3  bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                placeholder="Enter Address"
              />
            </div>
            <div>
              City <br />
              <input
                required={true}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="p-3 bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                type="text"
              />
            </div>
            <div>
              Postal Code <br />
              <input
                required={true}
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Enter postal code"
                className="p-3 bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                type="text"
              />
            </div>
            <div>
              Country <br />
              <input
                required={true}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter postal code"
                className="p-3 bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                type="text"
              />
            </div>
            <button
              type="submit"
              className="inline-block  uppercase bg-gray-900  text-white  py-3 px-8   active:bg-gray-600 "
            >
              continue{" "}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ShippingScreen;
