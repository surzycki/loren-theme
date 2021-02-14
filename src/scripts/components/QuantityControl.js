import React from "react";

const QuantityControl = ({ item, onUpdate }) => {
  const { quantity, key } = item;

  return (
    <>
      <span className="btn pe-1" onClick={() => onUpdate(item, quantity - 10)}>
        -
      </span>
      <span className="fw-bold">{quantity}</span>
      <span className="btn ps-1" onClick={() => onUpdate(item, quantity + 10)}>
        +
      </span>
    </>
  );
};

export default QuantityControl;
