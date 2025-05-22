// import { combineReducers } from "@reduxjs/toolkit";
// import authReducer from "@/features/auth/authSlice";
// mport userReducer from "@/features/user/userSlice"; // example

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
// });

// export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import { authApi } from "@/features/auth/authApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;
