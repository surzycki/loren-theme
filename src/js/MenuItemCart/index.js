import React, { useEffect, useState } from "react";
import eventBus from "Components/EventBus";
import TextMorph from "Components/TextMorph";

import PropTypes from "prop-types";

import * as cart from "@shopify/theme-cart";
import classNames from "classnames";

const MenuItemCart = ({ label }) => {
  useEffect(() => {
    eventBus.on("itemAdded", () => getCartData());

    getCartData();

    return () => eventBus.remove("itemAdded");
  }, []);

  const [productCount, setProductCount] = useState(0);

  const handleClick = () => {
    eventBus.dispatch("toggleCart");
  };

  const getCartData = () => {
    cart.getState().then((data) => {
      setProductCount(data.item_count);
    });
  };

  const labelClass = classNames({
    "fw-bold": productCount > 0,
  });

  return (
    <span className={labelClass} onClick={handleClick}>
      {console.log(`render menu ${productCount}`)}
      <TextMorph textValue1={`${label} (${productCount})`} textValue2="Gratzi"/>
    </span>
  );
};

MenuItemCart.propTypes = {
  label: PropTypes.string.isRequired,
};

export default MenuItemCart;
