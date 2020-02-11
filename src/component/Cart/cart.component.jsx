import React from "react";

import { connect } from "react-redux";

import { togglecartHidden } from "../../redux/cart/cart.action";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart.style.scss";
const CartIcon = ({ togglecartHidden, itemCount }) => (
  <div className="cart-icon" onClick={togglecartHidden}>
    <ShoppingIcon className="shopping-icon" />

    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  togglecartHidden: () => dispatch(togglecartHidden())
});
//pull of the state off the the redux
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
