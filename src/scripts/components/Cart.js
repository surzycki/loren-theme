import "unfetch/polyfill";
import React, { useEffect, useState } from "react";
import { formatPrice } from "./Utils";

import * as cart from "@shopify/theme-cart";

import CartItem from "./CartItem";

const getData = () => {
  return cart.getState();
};

const updateCart = (value) => {
  document.getElementById("desktop-cart-count").innerHTML = value;
};

const Cart = ({ route }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const onRemove = ({ key }) => {
    cart.removeItem(key).then((data) => {
      setData(data);
      updateCart(data.item_count);
    });
  };

  const onUpdate = ({ key }, quantity) => {
    cart.updateItem(key, { quantity }).then((data) => {
      setData(data);
      updateCart(data.item_count);
    });
  };

  console.log(data);

  return (
    <section className="container">
      {data && data.item_count === 0 && <h2 className="h2">Cart Empty</h2>}
      {data && data.item_count > 0 && (
        <form action={route} method="post" noValidate>
          {data.items.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            );
          })}

          <div className="row">
            <div className="col-8"></div>
            <div className="col-4 text-end">
              <span className="h3">{formatPrice(data.total_price)}</span>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-8"></div>
            <div className="col-4 text-end py-2">
              <input
                className="btn btn-lg btn-success"
                type="submit"
                name="checkout"
                value="Checkout"
              />
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Cart;
