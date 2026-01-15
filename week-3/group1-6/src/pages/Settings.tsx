/**
 * form: edit
 * 1. first name
 * 2. last name
 * 3. email
 * 4. image
 */

import { useState } from "react";

interface Person {
    first: string;
    last: string;
    email: string;
    image: string;

}

export const Settings = ({first,last,email,image}) => {
    const [input, setInput] = useState("");
  return (
    <>
      <form>
        <button>Edit</button>
        <input type="text" placeholder= />
      </form>
    </>
  );
};
