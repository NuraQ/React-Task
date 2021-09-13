import { SET_USER_INFO, CLEAR_USER_INFO } from "./userInfo.types";

const test = () => {

}
export const setUserInfo = (user) => (dispatch) => {
    console.log("user   ",user)
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
