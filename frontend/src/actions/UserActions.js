import axios from "axios";

export const logout = () => async (dispatch, getState) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cart");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: "USER_LOGOUT" });
  dispatch({ type: "CART_CLEAR_ITEMS" });
  dispatch({ type: "USER_DETAILS_RESET" });
  dispatch({ type: "ORDER_LIST_MY_RESET" });
  //dispatch({ type: "USER_LIST_RESET" })
  document.location.href = "/login";
};

export const updateUserProfile = (userUpdate) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_UPDATE_PROFILE_REQUEST",
    });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.patch(`/api/users/me`, userUpdate, config);

    dispatch({
      type: "USER_UPDATE_PROFILE_SUCCESS",
      payload: data,
    });
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: "USER_UPDATE_PROFILE_FAIL",
      payload: message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: "USER_LOGIN_REQUEST",
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      message: error.response.data.erreur,
    });
  }
};

export const register =
  ({ email, name, password }) =>
  async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/",
        { email, name, password },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));

      dispatch({
        type: "USER_REGISTER_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "USER_REGISTER_FAIL",
        message: error.message,
      });
    }
  };
