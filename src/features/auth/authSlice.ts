// import { createSlice } from "@reduxjs/toolkit";
// import { login } from "./authThunks";
// import { AuthState } from "./authTypes";

// const initialState: AuthState = {
//   token: null,
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem("token");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.user = payload.user;
//         state.loading = false;
//       })
//       .addCase(login.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload as string;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, JwtPayload } from "./authTypes";

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: JwtPayload }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken"); // Also remove refreshToken here for consistency
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
