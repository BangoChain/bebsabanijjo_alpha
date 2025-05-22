// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AxiosError } from "axios"; // import from axios library
// import axios from "@/utils/axios";
// import { jwtDecode } from "jwt-decode";
// import { AuthCredentials, JwtPayload } from "./authTypes";

// export const login = createAsyncThunk(
//   "auth/login",
//   async (credentials: AuthCredentials, { rejectWithValue }) => {
//     try {
//       const response = await axios.post("/api/auth/login", credentials);
//       const token = response.data.accessToken;
//       localStorage.setItem("token", token);
//       const user = jwtDecode<JwtPayload>(token);
//       return { token, user };
//     } catch (error) {
//       const err = error as AxiosError<{ message: string }>;
//       return rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );
