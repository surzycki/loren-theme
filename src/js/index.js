import ReactDOM from "react-dom/client";
import React from "react";
import AddToCart from "Components/AddToCart";
import MenuItemCart from "Components/MenuItemCart";
import IconCart from "Components/IconCart";

// text to pass to components
const containerAddToCartText = document.getElementById('add-to-cart-text');

let variantId, variantPrice, add, thanks;
if (containerAddToCartText) {
  variantId = Number(containerAddToCartText?.dataset?.variantId);
  variantPrice = Number(containerAddToCartText?.dataset?.variantPrice);
  add = String(containerAddToCartText?.dataset?.addToCart);
  thanks = String(containerAddToCartText?.dataset?.thankYou);
}

// Button and controls to add to cart
const containerAddToCartMobile = document.getElementById('add-to-cart-mobile');
const containerAddToCartDesktop = document.getElementById('add-to-cart-desktop');

if (containerAddToCartMobile) {
  const addToCartMobile = ReactDOM.createRoot(containerAddToCartMobile);
  addToCartMobile.render(
    <AddToCart
      variantId={variantId}
      variantPrice={variantPrice}
      addToCart={add}
      thankYou={thanks}
    />
  );
}

if (containerAddToCartDesktop) {
  const addToCartDesktop = ReactDOM.createRoot(containerAddToCartDesktop);
  addToCartDesktop.render(
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
