import React, { useState } from "react";

/**
 * Goal: Add some state, so that when we click the button
 * user is set to active
 */

export const StudentCard = ({ name }: { name: string }) => {
    const[isActive, setActive] = useState(false);

  return (
    <div>
      <p>{name} is {isActive ? "🟢 Active" : "⚪ Offline"};</p>
     <button onClick={() => setActive(!isActive)}>Toggle State</button>
    </div>
  );
};
