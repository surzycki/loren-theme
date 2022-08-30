import ReactDOM from "react-dom/client";
import React from "react";
import AddToCart from "./AddToCart";
import IconCart from "./IconCart";

const containerAddToCart = document.getElementById('add-to-cart');

if (containerAddToCart) {
  const variantId = Number(containerAddToCart?.dataset?.variantId);
  const variantPrice = Number(containerAddToCart?.dataset?.variantPrice);
  const add = String(containerAddToCart?.dataset?.addToCart);
  const thanks = String(containerAddToCart?.dataset?.thankYou);

  const addToCart = ReactDOM.createRoot(containerAddToCart);

  addToCart.render(
    <AddToCart
      variantId={variantId}
      variantPrice={variantPrice}
      addToCart={add}
      thankYou={thanks}
    />
  );
}

const containerIconCart = document.getElementById('icon-cart');

if(containerIconCart) {
  const iconCart = ReactDOM.createRoot(containerIconCart);
  iconCart.render(<IconCart/>);
}
