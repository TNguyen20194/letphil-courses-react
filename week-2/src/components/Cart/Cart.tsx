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
  };

type Cart = Item[];

  const [cart, setCart] = useState<Cart>([
    { id: 1, name: "Apple", price: 2, quantity: 0 },
    { id: 2, name: "Banana", price: 1, quantity: 0 }
  ]);

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  function updateCart(id:number, action:string) {
    const updatedCart = cart.map((item) => {

      const newQty = action === "increase" ? item.quantity + 1 : item.quantity - 1;

      if(item.id === id) {
        return {
          ...item,
          quantity:
          // Keep what value is larger => Preventing items from going to negative value
          Math.max(0, newQty)
        };
      }
      if(item.quantity < 0) return item;
      return item;
    });

    setCart(updatedCart);
  };

  return (
    <div className="px-4">
      <div>
        <h2 className="text-2xl mb-5">Total cost: ${total}</h2>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          updateCart={updateCart}
          />
          ))}
      </div>
    </div>
  );
};


/* Switch Method:

function updateCart(id: number, action: string) {
    switch (action) {
      case "increase": {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        setCart(updatedCart);
        break;
      }
      case "decrease": {
        const updatedCart = cart.map((item) => {
          if (item.id === id && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        setCart(updatedCart);
        break;
      }
      default:
        return [];
    }
  }
*/