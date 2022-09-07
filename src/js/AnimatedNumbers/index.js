import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";

import PropTypes from "prop-types";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const AnimatedNumbers = ({ initialValue, itemKey }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    eventBus.on("itemUpdated", ({ newValue, key }) => {
      if(key === itemKey) {
        setValue(newValue);
      }
    })

    eventBus.on("totalUpdated", ({ newValue, key }) => {
      if(itemKey === 'total') {
        const total = Number(newValue) + Number(value);
        setValue(total);
      }
    })
  });

  const [productCount, setProductCount] = useState(0);

  return (
    <span>
        { value }
    </span>
  );
};


AnimatedNumbers.propTypes = {
  initialValue: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default AnimatedNumbers;
