import "unfetch/polyfill";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import * as cart from "@shopify/theme-cart";

import EmptyCart from "./EmptyCart";
import CartForm from "./CartForm";
import eventBus from "./EventBus";

const getData = () => {
  console.log("get data called");
  return cart.getState();
};

const Cart = () => {
  // we are not using boolean to store the closed state, as setting the
  // default below can get wonky
  const initialToggleState =
    localStorage.getItem("CartToggleState") || "closed";

  useEffect(() => {
    eventBus.on("toggleCart", () => handleToggle());
    eventBus.on("itemAdded", () => {
      getData().then((data) => setData(data));
    });

    localStorage.setItem("CartToggleState", toggle);

    scrollState();

    return () => {
      eventBus.remove("toggleCart");
    };
  }, []);

  // start closed
  const [toggle, setToggle] = useState(initialToggleState);
  const [data, setData] = useState(null);

  const handleToggle = () => {
    if (toggle == "closed") {
      setToggle("opened");
    } else {
      setToggle("closed");
    }
    scrollState();
  };

  const scrollState = () => {
    // preventing the body from scrolling when cart open
    const body = document.getElementsByTagName("BODY")[0];

    if (toggle == "closed") {
      body.classList.remove("no-scroll");
    } else {
      body.classList.add("no-scroll");
    }
  };

  const onRemove = ({ key }) => {
    cart.removeItem(key).then((data) => {
      setData(data);
    });
  };

  const onUpdate = ({ key }, quantity) => {
    cart.updateItem(key, { quantity }).then((data) => {
      setData(data);
    });
  };

  const cartClass = classNames({
    cart: true,
    closed: toggle == "closed",
  });

  const logo1xSrc = "https://example.com";
  const logo2xSrc = "https://2example.com";
  const logo3xSrc = "https://3example.com";
  const submitRoute = "https://example.com";

  const cartContents = () => {
    return (
      <>
        <h1 className="h1">H</h1>
        <img
          src={logo1xSrc}
          srcSet={`${logo2xSrc} 2x, ${logo3xSrc} 3x`}
          alt="Piu Cafe"
        />
      </>
    );
  };

  return (
    <div className={cartClass}>
      <div className="cart--overlay" onClick={handleToggle} />
      <div className="cart--contents">
        <div className="container pt-5">
          {data && data.item_count === 0 && <EmptyCart />}
          {data && data.item_count > 0 && (
            <CartForm
              lineItems={data.items}
              onUpdate={onUpdate}
              onRemove={onRemove}
              submitRoute={submitRoute}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
