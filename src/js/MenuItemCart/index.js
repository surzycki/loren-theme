import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import TextMorph from "Components/TextMorph";

import PropTypes from "prop-types";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const MenuItemCart = ({ label }) => {
  useEffect(() => {
    eventBus.on("itemAdded", () => {
      getCartData({init: false})
    });

    // get cart data one time
    getCartData({init: true});

    return () => eventBus.remove("itemAdded");
  }, []);

  const [productCount, setProductCount] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false)

  const handleClick = () => {
    eventBus.dispatch("toggleCart");
  };

  const getCartData = ({ init }) => {
    cart.getState().then((data) => {
      setProductCount(data.item_count);
      if(!init) {
        setShouldAnimate(true)
      }
    });
  };

  const labelClass = classNames({
    "fw-bold": productCount > 0,
  });

  return (
    <span className={labelClass} onClick={handleClick}>
      {console.log(`render menu ${productCount}`)}
      <TextMorph textValue1={`${label} (${productCount})`} textValue2="Gratzi" shouldAnimate={shouldAnimate}/>
    </span>
  );
};

MenuItemCart.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MenuItemCart;
