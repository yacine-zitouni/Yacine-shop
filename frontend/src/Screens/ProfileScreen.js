/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../actions/UserActions";
import { listMyOrders } from "../actions/orderActions";
import { XIcon, CheckIcon } from "@heroicons/react/solid";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import TableLoader from "../Components/Loaders/TableLoader";

const ProfileScreen = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { success, error } = useSelector((state) => state.userUpdate);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { orders } = useSelector((state) => state.orderListMy);
  console.log(`orders`, orders);
  useEffect(() => {
    if (!user) {
      props.history.push("/login");
    } else {
      dispatch(listMyOrders());
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  useEffect(() => {
    if (error) {
      setMessage(error);
    }
  }, [error]);

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
      setMessage("");
      dispatch(updateUserProfile({ name, email, password }));
    } else {
      setMessage("Passwords doesn't match");
    }
  };
  return (
    <main>
      <Helmet>
        <title>{"Yacine Shop! Your online store"}</title>
      </Helmet>
      <div className="container mx-auto lg:pl-20  md:grid gap-x-8 grid-cols-4">
        <div className="col-start-1  col-end-2 row-span-full">
          <h2 className="text-2xl uppercase tracking-widest mb-6 text-heading">
            User Profile
          </h2>

          <form
            onSubmit={OnFormSubmit}
            className="space-y-6 text-sm pl-20 lg:pl-0 text-gray-700"
          >
            {message && <Message message={message} type="danger" />}

            {success && !message && (
              <Message type={"success"} message="Profile updated!" />
            )}
            <div>
              Name <br />
              <input
                value={name}
                onChange={onNameChange}
                type="text"
                className=" p-3 bg-gray-100  text-sm text-gray-500 focus:border-2 border-gray-500 placeholder-gray-400 mt-3 md:w-full border-0"
                placeholder="Enter Name"
              />
            </div>
            <div>
              Email Address <br />
              <input
                onChange={onEmailChange}
                value={email}
                type="text"
                className=" p-3 bg-gray-100 mt-3 text-sm text-gray-500 focus:border-2 border-gray-500 md:w-full  placeholder-gray-400 border-0"
                placeholder="Enter Email"
              />
            </div>
            <div>
              Password <br />
              <input
                onChange={onPasswordChange}
                value={password}
                placeholder="Enter Password"
                className=" p-3 bg-gray-100 mt-3 md:w-full text-sm text-gray-500 placeholder-gray-400 border-0"
                type="password"
              />
            </div>
            <div>
              Confirm Password <br />
              <input
                onChange={onConfirmPasswordChange}
                value={confirmPassword}
                placeholder="Confirm Password"
                className=" p-3 bg-gray-100 mt-3 focus:border-2 text-sm text-gray-500 focus:border-gray-500 md:w-full placeholder-gray-400 border-0"
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
        </div>
        <div className="col-start-2 col-end-5">
          <h2 className="text-2xl uppercase tracking-widest mb-6 text-heading">
            {" "}
            My orders
          </h2>
          <div className="flex flex-col">
            <div className="-my-2  overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                {orders ? (
                  <div className="shadow overflow-hidden border-b border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Id
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            total
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            paid
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            delivered
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                          <tr className="text-gray-500 text-sm odd:bg-gray-100 ">
                            <td className="td"> {order._id} </td>
                            <td className="td">
                              {order.createdAt.split("T")[0]}
                            </td>
                            <td className="td">{order.totalPrice}</td>
                            <td className="td">
                              {order.isPaid ? (
                                <CheckIcon className="text-green-600  w-4 ml-4 " />
                              ) : (
                                <XIcon className="text-red-600  w-4 ml-4 " />
                              )}
                            </td>
                            <td className="td">
                              {order.isDelivered ? (
                                <CheckIcon className="text-green-600 w-4 ml-4 " />
                              ) : (
                                <XIcon className="text-red-600 w-4 ml-4 " />
                              )}
                            </td>
                            <td>
                              <Link
                                className="underline  hover:text-purple-700 text-purple-500"
                                to={`/order/${order._id}`}
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <TableLoader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileScreen;
