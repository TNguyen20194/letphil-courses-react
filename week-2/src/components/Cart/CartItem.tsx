import React from "react";

interface ICartItem {
  quantity: number;
  setCart: (newState: number) => void;
  name: string;
}

export const CartItem = ({ name, quantity, setCart }: ICartItem) => {
  return (
    <>
      <div>
        <span>{name}</span>: {quantity}
      </div>
      <div>
        <button onClick={() => setCart(quantity + 1)}>Add Item</button>
        <button onClick={() => setCart(quantity - 1)}>Remove Item</button>
      </div>
    </>
  );
};
