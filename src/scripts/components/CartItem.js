import React from "react";
import { formatPrice } from "./Utils";
import QuantityControl from "./QuantityControl";

const getShortDescription = (value) => {
  const shortDescription = value.split("section")[1];
  return shortDescription;
};

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="row py-3">
      <div className="col-3 text-start">
        <img src={item.image} alt={item.title} width="200px" />
      </div>
      <div className="col-5 text-start">
        <div className="h3">
          <a href="{{ item.url }}">{item.tile}</a>
        </div>
        <p>{getShortDescription(item.product_description)}</p>
      </div>
      <div className="col-2">
        <div>
          <QuantityControl item={item} onUpdate={onUpdate} />
        </div>
        <div className="btn" onClick={() => onRemove(item)}>
          REMOVE
        </div>
      </div>
      <div className="col-2 text-end">
        <span className="h3">{formatPrice(item.line_price)}</span>
      </div>
    </div>
  );
};

export default CartItem;
