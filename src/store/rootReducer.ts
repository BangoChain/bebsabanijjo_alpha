import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
//mport userReducer from "@/features/user/userSlice"; // example

const rootReducer = combineReducers({
  auth: authReducer,
  // user: userReducer,
});

export default rootReducer;
