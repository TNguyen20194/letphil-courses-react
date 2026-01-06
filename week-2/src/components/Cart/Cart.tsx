import React, { useState } from "react";
import { CartItem } from "./CartItem";

/**
 * Make a cart system where the parent stores quantity, but the child updates it.
 * Components
 *      - Cart (parent)
 *      - CartItem (child)
 *      - CartItem (child)
 * Requirements
 *      - Cart stores state: quantity
 *      - CartItem receives:
 *      - quantity
 *      - onIncrease()
 *      - onDecrease()
 *      - Buttons in child update parent state
 */

// item name: quantity
// { apple: 0 }
// { orange: 0 }

export const Cart = () => {
  const [cart, setCart] = useState([
    { name: "apple", quantity: 0 },
    { name: "orange", quantity: 0 },
  ]);

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.name} name={item.name} quantity={item.quantity} setCart={setCart}/>
        ))}
      </ul>
    </div>
  );
};
