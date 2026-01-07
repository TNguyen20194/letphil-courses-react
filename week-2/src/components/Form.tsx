import React, { useState } from "react";

/**
 * Build a NameForm component that tracks input using state and displays a greeting.
 * Requirements
 *      - State: name
 *      - Input updates name
 *      - Show: Hello, {name}
 *      - Parent passes defaultName="Christian"
 */

export const Form = ({ defaultName }: { defaultName: string }) => {

  const[name, setName] = useState(defaultName);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <form className="flex flex-col items-start justify-center mt-3">
        <label htmlFor="Update name">Update Name</label>
        <input 
        type="text" 
        placeholder="Enter name here" 
        name="Update name" 
        onChange={(e) => setName(e.target.value )}
        className="outline-solid p-2 mt-2"
        />
      </form>
    </div>
  );
};
