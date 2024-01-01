import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/Cart/CartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
