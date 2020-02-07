//we need the intial stage here for our cart
import CartActionTypes from "./cart.type";

const INTIAL_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default CartReducer;
