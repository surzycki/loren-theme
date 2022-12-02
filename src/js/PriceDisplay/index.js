import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import AnimatedNumbers from "Components/AnimatedNumbers";
import * as cart from "@shopify/theme-cart";

import PropTypes from "prop-types";
import classNames from "classnames";

const PriceDisplay = ({ initialValue, itemKey }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    eventBus.on("priceUpdated", ({ key }) => {
      if (key === itemKey) {
        cart
          .getItem(key)
          .then((item) => {
            setValue(item.line_price);
          })
          .catch((error) => {
            setValue(0);
            window.location.reload(false);
          });
      }
    });
    eventBus.on("totalUpdated", () => {
      if (itemKey === "total") {
        cart.getState().then((state) => {
          setValue(state.total_price);
        });
      }
    });
  }, []);

  return (
    <span>
      <AnimatedNumbers value={value / 100} />
    </span>
  );
};

PriceDisplay.propTypes = {
  initialValue: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default PriceDisplay;
