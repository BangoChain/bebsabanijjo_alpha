//its a redux toolkit with persist setup. also create a new file called (persistConfig.ts)

// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import authReducer from "@/features/auth/authSlice";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

//old one
// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/authSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
