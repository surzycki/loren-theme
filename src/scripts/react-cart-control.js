import ReactDOM from "react-dom";
import React from "react";
import CartControl from "./components/CartControl";

const root = document.getElementById("react-cart-control");

const variantId = Number(root?.dataset?.variantId);
const variantPrice = Number(root?.dataset?.variantPrice);
const addToCart = String(root?.dataset?.addToCart);
const thankYou = String(root?.dataset?.thankYou);

root &&
  ReactDOM.render(
    <CartControl
      variantId={variantId}
      variantPrice={variantPrice}
      addToCart={addToCart}
      thankYou={thankYou}
    />,
    root
  );
