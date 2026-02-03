import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./authSlice";
import CountReducer from "./countSlice";
const myStore = configureStore({
  reducer: {
    authentication: AuthReducer,
    counter: CountReducer,
  },
});

export default myStore;
