import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/Cart/CartSlice";
import userReducer from "../redux/User/Userslice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
