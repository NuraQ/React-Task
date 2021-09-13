import { SET_USER_INFO, CLEAR_USER_INFO } from "./userInfo.types";

export const setUserInfo = (user) => (dispatch) => {
  dispatch({
    type: SET_USER_INFO,
    payload: user
  });
};

export const clearUserInfo = () => (dispatch) => {
  dispatch({
    type: CLEAR_USER_INFO,
    payload: {}
  });
};
