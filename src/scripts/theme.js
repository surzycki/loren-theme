import "unfetch/polyfill";

import example from "./components/example";
import * as cart from "@shopify/theme-cart";

//window.Cart = cart;

// cart.addItem(6164917190854).then((item) => {
//   console.log(
//     `An item with a quantity of ${quantity} was added to your cart:`,
//     item
//   );
//});

// let formData = {
//   items: [
//     {
//       id: 38199853908166,
//       quantity: 2,
//     },
//   ],
// };

// fetch("/cart/add.js", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// example();
