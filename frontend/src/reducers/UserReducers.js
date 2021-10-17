export const UserReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };
    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        message: action.message,
      };
    case "USER_LOGOUT":
      return {};

    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
        user: {},
      };

    case "USER_REGISTER_SUCCESS":
      return {
        loading: false,
        user: action.payload,
      };
    case "USER_REGISTER_FAIL":
      return {
        loading: false,
        message: action.message,
      };

    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_PROFILE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_PROFILE_SUCCESS":
      return { loading: false, success: true, user: action.payload };
    case "USER_UPDATE_PROFILE_FAIL":
      return { loading: false, error: action.payload };
    case "USER_UPDATE_PROFILE_RESET":
      return {};
    default:
      return state;
  }
};
