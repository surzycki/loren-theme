import React, { useEffect, useState } from "react";
import { formatPrice } from "./Utils";

import PropTypes from "prop-types";

import "unfetch/polyfill";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const CartControl = ({ variantId, variantPrice }) => {
  const initialQuantity = +localStorage.getItem(variantId) || 10;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => localStorage.setItem(variantId, quantity));

  const updateCart = () => {
    cart.getState().then((data) => {
      document.getElementById("desktop-cart-count").innerHTML = data.item_count;
    });
  };

  const handleAddToCart = () => {
    cart.addItem(variantId, { quantity }).then((item) => {
      updateCart();
    });
  };

  const labelClass = (value) => {
    return classNames({
      "pe-2": true,
      "fw-bold": value == quantity,
    });
  };

  return (
    <>
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
      <br />
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <div>{formatPrice(quantity * variantPrice)}</div>
    </>
  );
};

CartControl.propTypes = {
  variantId: PropTypes.number.isRequired,
  variantPrice: PropTypes.number.isRequired,
};

export default CartControl;
