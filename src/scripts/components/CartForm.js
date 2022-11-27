import React from "react";
import CartItem from "./CartItem";

const CartForm = ({ lineItems, submitRoute, onUpdate, onRemove }) => {
  return (
    <>
      <form action={submitRoute} method="post" noValidate>
        {lineItems.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          );
        })}
      </form>
    </>
  );
};

export default CartForm;
