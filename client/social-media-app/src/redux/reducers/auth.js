import { AUTH, LOGOUT } from "../actions/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem(
        "profile",
        JSON.stringify({ authData: action.data })
      );
      return {
        ...state,
        authData: action.data,
      };
    case LOGOUT:
      localStorage.setItem("profile", null);
      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};
