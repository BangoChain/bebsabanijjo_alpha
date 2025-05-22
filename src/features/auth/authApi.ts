import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginRequest, LoginResponse } from "./authTypes";

// Create the auth API slice
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`, // attach /api here if needed
    // credentials: 'include', // uncomment if using cookies
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

// Export the generated React hook
export const { useLoginMutation } = authApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { AuthCredentials, JwtPayload } from "./authTypes";
// import { jwtDecode } from "jwt-decode";

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL,
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation<{ token: string }, AuthCredentials>({
//       query: (credentials) => ({
//         url: "/api/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation } = authApi;

// baseQuery: fetchBaseQuery({
//   baseUrl: process.env.NEXT_PUBLIC_API_URL,
//   prepareHeaders: (headers) => {
//     const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// }),
