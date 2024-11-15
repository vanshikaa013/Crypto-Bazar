import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Coin/coinSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    coins: coinReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
