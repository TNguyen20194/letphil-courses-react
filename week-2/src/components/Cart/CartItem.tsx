import React from "react";

interface CartItemProps {
  name: string;
  quantity: number;
  onIncrease: () => void
  onDecrease: () => void
}

export const CartItem = ({ name, quantity, onIncrease, onDecrease }: CartItemProps) => {
  return (
    <>
      <div className="mb-4">
        <div>
          <span>{name}</span>: {quantity}
        </div>
        <div className="inline-flex gap-3 mt-3">
          <button onClick={onIncrease}>Add Item</button>
          <button onClick={onDecrease}>Remove Item</button>
        </div>
      </div>
    </>
  );
};
