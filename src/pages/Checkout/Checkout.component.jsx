import React from "react";
import "./Ckeckout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Chekoutitem from "../../component/Checkout-item/Checkout-item.component";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <Chekoutitem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span> TOTAL: ${total} </span>
    </div>
  </div>
);
// this is the checkout section for the products and the related menu cards

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
