import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import IconCartEmpty from "Svg/icon-cart-empty.svg";
import IconCartFull from "Svg/icon-cart-full.svg";

import PropTypes from "prop-types";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const IconCart = () => {
  useEffect(() => {
    eventBus.on("itemAdded", () => getCartData());

    getCartData();

    return () => eventBus.remove("itemAdded");
  });

  const [productCount, setProductCount] = useState(0);

  const handleClick = () => {
    eventBus.dispatch("toggleCart");
  };

  const getCartData = () => {
    cart.getState().then((data) => {
      setProductCount(data.item_count);
    });
  };

  return (
    <span onClick={handleClick}>
      { productCount > 0 && <IconCartFull/> }
      { productCount === 0 && <IconCartEmpty/> }
    </span>
  );
};

export default IconCart;
