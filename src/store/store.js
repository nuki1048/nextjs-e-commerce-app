import {configureStore} from "@reduxjs/toolkit";
import counter from "@/store/couter";
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({ type: action });
    }

    return next(action);
};

const store = configureStore({
    reducer: {counter},
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(stringMiddleware),
});
export default store