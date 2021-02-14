import ReactDOM from "react-dom";
import React from "react";
import CartControl from "./components/CartControl";

const root = document.getElementById("react-cart-control");

const variantId = Number(root?.dataset?.variantId);
const variantPrice = Number(root?.dataset?.variantPrice);

root &&
  ReactDOM.render(
    <CartControl variantId={variantId} variantPrice={variantPrice} />,
    root
  );
