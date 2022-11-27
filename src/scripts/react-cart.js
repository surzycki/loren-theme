import ReactDOM from "react-dom";
import React from "react";
import MenuItemCart from "./components/MenuItemCart";
import Cart from "./components/Cart";

const rootCart = document.getElementById("react-cart");
const rootMenuItem = document.getElementById("react-menu-item-cart");

const menuLabel = String(rootMenuItem?.dataset?.label);

rootMenuItem &&
  ReactDOM.render(<MenuItemCart label={menuLabel} />, rootMenuItem);

rootCart && ReactDOM.render(<Cart />, rootCart);

//const checkoutRoute = root.dataset.checkoutRoute;
//root && ReactDOM.render(<Cart route={checkoutRoute} />, root);
