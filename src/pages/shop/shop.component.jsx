import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import Collectionpreview from "./../../component/Preview-Collection/collection-Preview.component";
class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Collectionpreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
