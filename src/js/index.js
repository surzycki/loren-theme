import ReactDOM from "react-dom/client";
import React from "react";
import AddToCart from "Components/AddToCart";
import MenuItemCart from "Components/MenuItemCart";
import IconCart from "Components/IconCart";

// Button and controls to add to cart
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

// Desktop menu item for cart
const containerMenuItemCart = document.getElementById('menu-item-cart');

if(containerMenuItemCart) {
  const menuLabel = String(containerMenuItemCart?.dataset?.label)

  const menuItemCart = ReactDOM.createRoot(containerMenuItemCart);
  menuItemCart.render(<MenuItemCart label={menuLabel}/>);
}

// mobile menu item icon for cart
const containerIconCart = document.getElementById('icon-cart');

if(containerIconCart) {
  const iconCart = ReactDOM.createRoot(containerIconCart);
  iconCart.render(<IconCart/>);
}
