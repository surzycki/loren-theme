import ReactDOM from "react-dom/client";
import React from "react";
import AddToCart from "Components/AddToCart";
import MenuItemCart from "Components/MenuItemCart";
import IconCart from "Components/IconCart";
import QuantityInput from "Components/QuantityInput";
import AnimatedNumbers from "Components/AnimatedNumbers";

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

// quantity input for cart
const containerQuantityInputs = document.getElementsByTagName('quantity-input');
if(containerQuantityInputs.length != 0) {
  for (var containerQuantityInput of containerQuantityInputs) {
    var quantity = Number(containerQuantityInput?.dataset?.quantity);
    var key = String(containerQuantityInput?.dataset?.key);
    const quantityInput = ReactDOM.createRoot(containerQuantityInput);
    quantityInput.render(<QuantityInput initialQuantity={quantity} itemKey={key} />);
  }
}

const containerPriceDisplays = document.getElementsByTagName('price-display');
if(containerPriceDisplays.length != 0) {
  for (var containerPriceDisplay of containerPriceDisplays) {
    var price = String(containerPriceDisplay?.dataset?.price);
    var key = String(containerPriceDisplay?.dataset?.key);
    const priceDisplay = ReactDOM.createRoot(containerPriceDisplay);
    priceDisplay.render(<AnimatedNumbers initialValue={price} itemKey={key} />);
  }
}
