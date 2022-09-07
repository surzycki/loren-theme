import React, { useState } from "react";
import eventBus from "Components/EventBus";

import PropTypes from "prop-types";
import 'unfetch/polyfill';
import 'es6-promise/auto';

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const QuantityInput= ({ initialQuantity, itemKey }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const updateCart = (quantity) => {
    if(quantity < 0 ) {
      return;
    }

    setQuantity(quantity);

    eventBus.dispatch("itemUpdated", { newValue: (quantity * 390), key: itemKey});

    cart.updateItem(itemKey, { quantity }).then(data => {
      if(quantity <= 0) {
        window.location.reload(false);
      }

      eventBus.dispatch("itemUpdated", { newValue: data.total_price, key: "total" });
    });
  };

  return (
    <div className="input-group">
        <button
            className="btn btn-sm btn-outline-secondary px-2 py-2"
            type="button"
            onClick={() => updateCart(quantity - 10)}>
            -
        </button>

        <input
            type="text"
            className="form-control text-center pe-none user-select-none"
            readOnly
            value={ quantity }
            aria-label=""
            min="0"/>

        <button
            className="btn btn-sm btn-outline-secondary px-2 py-2"
            type="button"
            onClick={() => updateCart(quantity + 10)}>
           +
        </button>
    </div>
  );
};

QuantityInput.propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  itemKey: PropTypes.string.isRequired
};

export default QuantityInput;
