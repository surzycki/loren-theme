import React, { useEffect, useState } from "react";
import { formatPrice } from "./Utils";

import PropTypes from "prop-types";

import "unfetch/polyfill";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const CartControl = ({ variantId, variantPrice, addToCart, thankYou }) => {
  const initialQuantity = +localStorage.getItem(variantId) || 10;
  const [quantity, setQuantity] = useState(initialQuantity);
  const [rotating, setRotating] = useState(false);

  useEffect(() => localStorage.setItem(variantId, quantity));

  const updateCart = () => {
    cart.getState().then((data) => {
      document.getElementById("desktop-cart-count").innerHTML = data.item_count;
      document.getElementById("cart-link").classList.add("activate-hover");
    });

    setRotating(true);

    const timer = setTimeout(() => {
      setRotating(false);
      document.getElementById("cart-link").classList.remove("activate-hover");
    }, 5000);

    setQuantity(0);
  };

  const handleAddToCart = () => {
    updateCart();
    // cart.addItem(variantId, { quantity }).then((item) => {
    //   updateCart();
    // });
  };

  const labelClass = (value) => {
    return classNames({
      "quantity-button": true,
      active: value == quantity,
    });
  };

  const cubeEffectClass = () => {
    return classNames({
      "cube-effect": true,
      active: rotating,
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between px-3 mb-3">
        <label className={labelClass(10)} onClick={() => setQuantity(10)}>
          10
        </label>
        <label className={labelClass(20)} onClick={() => setQuantity(20)}>
          20
        </label>
        <label className={labelClass(40)} onClick={() => setQuantity(40)}>
          40
        </label>
        <label className={labelClass(60)} onClick={() => setQuantity(60)}>
          60
        </label>
        <label className={labelClass(80)} onClick={() => setQuantity(80)}>
          80
        </label>
      </div>

      <div className="scene" onClick={handleAddToCart}>
        <div className={cubeEffectClass()}>
          <div className="cube-front">
            {addToCart} + {formatPrice(quantity * variantPrice)}
          </div>
          <div className="cube-top">{thankYou}</div>
        </div>
      </div>
    </>
  );
};

CartControl.propTypes = {
  variantId: PropTypes.number.isRequired,
  variantPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.string.isRequired,
  thankYou: PropTypes.string.isRequired,
};

export default CartControl;
