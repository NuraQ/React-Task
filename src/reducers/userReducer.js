import {
    CLEAR_USER_INFO,
    SET_USER_INFO,
  } from "../actions/userInfo";

  
  const initialAuthState = {
    user: {
      token: ""
    },
  };
  
  const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
      case SET_USER_INFO:
        return { ...state, user: action.payload };
      case CLEAR_USER_INFO:
        return { ...state, user: { ...initialAuthState } };
      default:
        return state;
    }
  };
  
  export { initialAuthState, authReducer };
  