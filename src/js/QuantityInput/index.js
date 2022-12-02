import React, { useState, useEffect } from "react";
import eventBus from "Components/EventBus";
import * as cart from "@shopify/theme-cart";

import PropTypes from "prop-types";
import "unfetch/polyfill";
import "es6-promise/auto";
import classNames from "classnames";

const QuantityInput = ({ initialQuantity, itemKey }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    eventBus.on("quantityUpdated", ({ quantity, key }) => {
      if (key === itemKey) {
        setQuantity(quantity);
      }
    });
  }, []);

  const updateCart = (quantity) => {
    if (quantity < 0) {
      return;
    }

    setQuantity(quantity);

    eventBus.dispatch("quantityUpdated", { quantity, key: itemKey });

    cart.updateItem(itemKey, { quantity }).then((data) => {
      eventBus.dispatch("priceUpdated", { key: itemKey });
      eventBus.dispatch("totalUpdated");
    });
  };

  return (
    <div className="input-group">
      <button
        className="btn btn-sm btn-outline-secondary px-2 py-2"
        type="button"
        onClick={() => updateCart(quantity - 1)}
      >
        -
      </button>

      <input
        type="text"
        className="form-control text-center pe-none user-select-none"
        readOnly
        value={quantity * 10}
        aria-label=""
        min="0"
      />

      <button
        className="btn btn-sm btn-outline-secondary px-2 py-2"
        type="button"
        onClick={() => updateCart(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

QuantityInput.propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default QuantityInput;
