import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/UserActions";
import Message from "../Components/Message";

const LoginScreen = (props) => {
  const dispatch = useDispatch();

  const { user, message } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search.split("redirect=")[1] || "/";
  useEffect(() => {
    if (user) {
      props.history.push(redirect);
    }
  }, [user, redirect, props.history]);
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const OnFormSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  return (
    <main>
      <div className="container flex justify-center mx-auto ">
        <div className="w-5/12 ">
          <h2 className="h2 uppercase tracking-widest mb-6 text-heading">
            Sign in
          </h2>
          {message && <Message message={message} type={"danger"} />}
          <form onSubmit={OnFormSubmit} className="space-y-7 text-gray-700">
            <div>
              Email Address <br />
              <input
                value={email}
                onChange={onEmailChange}
                type="text"
                className="p-3  bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                placeholder="enter Email"
              />
            </div>
            <div>
              Password <br />
              <input
                value={password}
                onChange={onPasswordChange}
                placeholder="enter Password"
                className="p-3 bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="inline-block  uppercase bg-gray-900  text-white  py-3 px-8   active:bg-gray-600 "
            >
              sign in
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-500 tracking-wider">
            New Customer?{" "}
            <Link
              to="/register"
              className="text-gray-700 text-md hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginScreen;
