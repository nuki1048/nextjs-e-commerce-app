import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

const isDevelopment = process.env.NODE_ENV !== "production";

const combinedReducer = combineReducers({
  cart,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer,
    devTools: isDevelopment,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore, {
  debug: isDevelopment,
});
