import React from "react";

interface ICartItem {
  item: {
    itemName: string;
    itemQuantity: number;
  };
  handleUpdateCart: (name: string) => void;
}

export const CartItem = ({ item, handleUpdateCart }: ICartItem) => {
  return (
    <div>
      {item.itemName} Quantity: {item.itemQuantity}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleUpdateCart(item.itemName)}
        >
          Increase Quantity
        </button>
        <button>Decrease Quantity</button>
      </div>
    </div>
  );
};
