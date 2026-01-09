import React from "react";

interface CartItemProps {
  id:number
  name: string;
  quantity: number;
  price: number;
  updateCart: (id: number, action: string) => void
}

export const CartItem = ({ id, name, quantity, price, updateCart }: CartItemProps) => {
  return (
    <>
      <div className="mb-4">
        <div className="flex flex-col justify-center items-center">
          <span>{name}: {quantity}</span>
          <span>Price per item: ${price}</span>
        </div>
        <div className="inline-flex gap-3 mt-3">
          <button onClick={() => updateCart(id, "increase")}>Add Item</button>
          <button onClick={() => updateCart(id, "decrease")}>Remove Item</button>
        </div>
      </div>
    </>
  );
};
