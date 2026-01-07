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
  interface Item {
    id: number,
    name: string,
    quantity: number,
    price: number
  }
  const [cart, setCart] = useState<Item[]>([
    { id: 1, name: "Apple", price: 2, quantity: 3 },
    { id: 2, name: "Banana", price: 1, quantity: 5 }
  ]);

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  const handleIncrease = (id:number) => {
    const updatedCart = cart.map((item) => {
      if(item.id === id) {
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quanity: item.quantity + 1
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <div className="px-4">
      <div>
        Total cost: {total}
      </div>
      <div>
        {cart.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};
