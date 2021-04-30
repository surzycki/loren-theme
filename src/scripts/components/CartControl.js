import React, { useEffect, useState } from "react";
import { formatPrice } from "./Utils";

import PropTypes from "prop-types";

import "unfetch/polyfill";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const CartControl = ({ variantId, variantPrice, addToCart }) => {
  console.log(addToCart);
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
      "quantity-button": true,
      active: value == quantity,
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
      <button
        className="btn btn-lg btn-dark w-100"
        type="button"
        onClick={handleAddToCart}
      >
        {addToCart} + {formatPrice(quantity * variantPrice)}
      </button>
    </>
  );
};

CartControl.propTypes = {
  variantId: PropTypes.number.isRequired,
  variantPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.string.isRequired,
};

export default CartControl;
