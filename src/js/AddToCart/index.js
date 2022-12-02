import React, { useEffect, useState } from "react";
import { formatPrice } from "../utils";
import eventBus from "Components/EventBus";

import PropTypes from "prop-types";

import "unfetch/polyfill";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const AddToCart = ({ variantId, variantPrice, addToCart, thankYou }) => {
  const initialQuantity = +localStorage.getItem(variantId) || 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [rotating, setRotating] = useState(false);

  useEffect(() => localStorage.setItem(variantId, quantity));

  const updateCart = () => {
    const timer = setTimeout(() => {
      setRotating(false);
      setQuantity(0);
    }, 1500);

    // dispatch event for whoever is listening
    eventBus.dispatch("itemAdded");
  };

  const handleAddToCart = () => {
    setRotating(true);

    cart.addItem(variantId, { quantity }).then((item) => {
      updateCart();
    });
  };

  const labelClass = (value) => {
    return classNames({
      "btn-quantity": true,
      active: value == quantity,
      inactive: value != quantity,
    });
  };

  const cubeEffectClass = classNames({
    "cube-effect": true,
    active: rotating,
  });

  return (
    <>
      <div className="d-flex justify-content-between mb-2">
        <label className={labelClass(1)} onClick={() => setQuantity(1)}>
          10
        </label>
        <label className={labelClass(2)} onClick={() => setQuantity(2)}>
          20
        </label>
        <label className={labelClass(4)} onClick={() => setQuantity(4)}>
          40
        </label>
        <label className={labelClass(6)} onClick={() => setQuantity(6)}>
          60
        </label>
        <label className={labelClass(8)} onClick={() => setQuantity(8)}>
          80
        </label>
      </div>

      <div className="btn-3d" onClick={handleAddToCart}>
        <div className={cubeEffectClass}>
          <div className="cube-front">
            {addToCart} + {formatPrice(quantity * variantPrice)}
          </div>
          <div className="cube-top">{thankYou}</div>
        </div>
      </div>
    </>
  );
};

AddToCart.propTypes = {
  variantId: PropTypes.number.isRequired,
  variantPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.string.isRequired,
  thankYou: PropTypes.string.isRequired,
};

export default AddToCart;
