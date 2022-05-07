import React from "react";

import "./item-list.scss";
const ItemList = () => {
  return(
    <ul className="item__list block-std list--std">
      <li className="item__list-item list--std-item">
        <span className="item__list-text">some 1</span>  
      </li>
      <li className="item__list-item list--std-item">
        <span className="item__list-text">some 2</span>  
      </li>
      <li className="item__list-item list--std-item">
        <span className="item__list-text">some 4</span>  
      </li>
    </ul>
  )
}

export default ItemList;