import { AUTH } from "./actionTypes";
import * as api from "../../api";

export const signin = (fornData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (fornData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
