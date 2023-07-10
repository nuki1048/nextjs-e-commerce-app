import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }

  return next(action);
};

const combinedReducer = combineReducers({
  cart,
});

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
});
