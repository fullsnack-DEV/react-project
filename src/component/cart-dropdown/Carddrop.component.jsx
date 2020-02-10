import React from "react";
import CustomButton from "../cutom-button/custom-button.component";
import CartItem from "../../component/cart-item/cart-item.component";
import { connect } from "react-redux";
import "./carddrop.style.scss";

const Cartdropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(Cartdropdown);
