import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/UserActions";
import Message from "../Components/Message";
const RegisterScreen = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = props.location.search.split("redirect=")[1] || "/";
  useEffect(() => {
    if (user) {
      props.history.push(redirect);
    }
  }, [user, redirect, props.history]);
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const OnFormSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword === password) {
      dispatch(register({ name, email, password }));
    } else {
      setMessage("Passwords doesn't match");
    }
  };

  return (
    <main>
      <div className="container   flex justify-center mx-auto ">
        <div className="w-5/12 ">
          <h2 className="h2 uppercase mb-6 text-heading">Sign up</h2>
          {message && <Message type="danger" message={message} />}
          <form onSubmit={OnFormSubmit} className="space-y-6  text-gray-700">
            <div>
              Name <br />
              <input
                value={name}
                onChange={onNameChange}
                type="text"
                className=" p-3 bg-gray-50   focus:border-2 border-gray-500 placeholder-gray-400 mt-3 w-full border-0"
                placeholder="Enter Name"
              />
            </div>
            <div>
              Email Address <br />
              <input
                onChange={onEmailChange}
                value={email}
                type="text"
                className=" p-3 bg-gray-50 mt-3 focus:border-2 border-gray-500 w-full  placeholder-gray-400 border-0"
                placeholder="Enter Email"
              />
            </div>
            <div>
              Password <br />
              <input
                onChange={onPasswordChange}
                value={password}
                placeholder="Enter Password"
                className=" p-3 bg-gray-50 mt-3 w-full placeholder-gray-400 border-0"
                type="password"
              />
            </div>
            <div>
              Confirm Password <br />
              <input
                onChange={onConfirmPasswordChange}
                value={confirmPassword}
                placeholder="Confirm Password"
                className=" p-3 bg-gray-50 mt-3 focus:border-2 focus:border-gray-500 w-full placeholder-gray-400 border-0"
                type="password"
              />
            </div>
            <button
              type="submit"
              className="inline-block  uppercase bg-gray-900   text-white  py-3 px-8   "
            >
              sign up
            </button>
          </form>
          <p className="mt-2  mb-6 text-sm text-gray-500 tracking-wider">
            Have an Account? &nbsp;
            <Link to="/login" className="text-gray-700 text-md hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default RegisterScreen;
