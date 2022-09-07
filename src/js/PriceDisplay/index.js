import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import AnimatedNumbers from "Components/AnimatedNumbers";

import PropTypes from "prop-types";
import classNames from "classnames";

const PriceDisplay = ({ initialValue, itemKey }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    eventBus.on("itemUpdated", ({ newValue, key }) => {
      if(key === itemKey) {
        setValue(newValue);
      }
    })
  });

  return (
    <span>
      <AnimatedNumbers value={(value / 100)}/>
    </span>
  );
};


PriceDisplay.propTypes = {
  initialValue: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
};

export default PriceDisplay;
