import React, { useState } from "react";

/**
 * Goal: Add some state, so that when we click the button
 * user is set to active
 */

export const StudentCard = ({ name }: { name: string }) => {
  //    current state value, setter function
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive(!isActive);
  }

  return (
    <div>
      <p>{name} user is active: {isActive ? "Active" : "Offline"}</p>
      <button onClick={handleOnClick}>Toggle User</button>
    </div>
  );
};
