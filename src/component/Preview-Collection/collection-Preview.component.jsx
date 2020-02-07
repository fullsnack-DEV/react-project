import React from "react";

import "./collection-Preview.style.scss";

import Collectionitem from "./../collection-item/collection-item.component";

const Collectionpreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <Collectionitem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default Collectionpreview;
