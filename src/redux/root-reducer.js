//here we are going to write our all of our state of our apllication
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
export default combineReducers({
  user: userReducer
});
