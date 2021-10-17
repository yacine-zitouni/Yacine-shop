import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const name = user ? user.name : undefined;
  return (
    <header className=" bg-gray-700 mb-4 ">
      <div className="container mx-auto px-11 py-6 items-center  flex justify-between ">
        <Link to="/" className="text-2xl uppercase  text-white ">
          Yacine shop
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="link  " to="/cart">
            Cart
          </Link>
          {name ? (
            <div className="  flex flex-col justify-center ">
              <div className="flex items-center justify-center ">
                <div className=" relative inline-block text-left dropdown">
                  <span className="rounded-md shadow-sm">
                    <button
                      // className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      className="inline-flex justify-center w-full link "
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      aria-controls="headlessui-menu-items-117"
                    >
                      <span>{name}</span>
                      <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <div
                    id="dropdown"
                    className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
                  >
                    <div
                      className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-400 rounded-sm divide-y divide-gray-100   outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div className="px-4 py-3">
                        <p className="text-sm text-gray-700 leading-5">
                          Signed in as
                        </p>
                        <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                          {user.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          to="/me"
                          tabIndex="0"
                          className="text-gray-700  hover:text-gray-900 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          My profile
                        </Link>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => dispatch(logout())}
                          tabIndex="3"
                          className="text-gray-700 flex  hover:text-gray-800 justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link className="link  " to="/login">
              sign IN
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
