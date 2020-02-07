import React from "react";
import { connect } from "react-redux";
import "./collection-item.style.scss";
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../cutom-button/custom-button.component";

const Collectionitem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted> Add to Cart </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Collectionitem);
