import React from "react";
import CustomButton from "../cutom-button/custom-button.component";
import "./carddrop.style.scss";

const Cartdropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default Cartdropdown;
