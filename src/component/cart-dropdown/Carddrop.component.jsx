import React from "react";
import CustomButton from "../cutom-button/custom-button.component";
import CartItem from "../../component/cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { togglecartHidden } from "../../redux/cart/cart.action";
import "./carddrop.style.scss";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const Cartdropdown = ({ cartItems, history , dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is emty</span>
      )}
    </div>

    <CustomButton onClick={() => {history.push("/Checkout")
  dispatch(togglecartHidden())}}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});
// thi sis the card dropdown component we want to drop out of the card
export default withRouter(connect(mapStateToProps)(Cartdropdown));
// withrouter we can give the props to the out other compnent
