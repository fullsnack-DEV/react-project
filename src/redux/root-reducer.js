//here we are going to write our all of our state of our apllication
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
export default combineReducers({
  user: userReducer,
  cart: CartReducer
});
